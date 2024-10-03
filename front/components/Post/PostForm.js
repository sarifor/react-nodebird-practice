// 리액트 관련
import React, { useState, useRef, useCallback } from 'react';

// antd 관련
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

// 리덕스 관련
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../../reducers/post';

// PostForm 컴포넌트
// - Q. handleImageChange에서, 바이너리 파일(이미지)을 상태에 추가하려면?
const PostForm = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const userId = userInfo.id;
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [ text, setText ] = useState('');
  const [ image, setImage ] = useState([]);
  const imageInput = useRef();

  const handleTextChange = useCallback((e) => {
    setText(e.target.value);
  }, [text]);

  const handleImageChange = useCallback((e) => {
    const images = Array.from(e.target.files);
    setImage(images);
  }, [image]);

  // 폼 데이터 제출 함수
  // - text가 업데이트될 때마다 함수를 새로 생성하여, 항상 text의 최신 값을 사용
  // - 데이터는 중괄호로 감싸 객체 형태로 전달하기
  // - 실제로는 reducer에 마련해둔 더미 데이터가 업로드됨 
  const handlePostFormSubmit = useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: { userId, text, image },
    });
    setText('');
  }, [text]);

  const handleImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <>
      {/* 포스트 작성 폼
        - 입력란
        - 이미지 업로드 버튼
        - 포스트 제출 버튼
        - 업로드된 이미지 표시(구현 중) */}
      <Form 
        style={{ margin: 'auto', marginTop: 20 }}
        onFinish={handlePostFormSubmit}
      >
        <TextArea
          value={text}
          placeholder="What's happening?"
          rows={4}
          maxLength={140}
          onChange={handleTextChange}
        />
        
        <div style={{ marginTop: 10, textAlign: 'right' }}>
          <input type="file" multiple hidden ref={imageInput} onChange={handleImageChange} />
          <Button onClick={handleImageUpload}>Upload Image</Button>
          <Button type="primary" htmlType="submit">Post</Button>
        </div>
        
        <div>
          {imagePaths.map((v) => (
            <div key={v}>
              <img src={v} />
              <div>
                <Button>Remove</Button>
              </div>
            </div>
          ))}
        </div>
      </Form>    
    </>
  );
};

export default PostForm;