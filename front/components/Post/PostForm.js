// 리액트 관련
import React, { useState, useRef, useCallback } from 'react';

// antd 관련
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

// 리덕스 관련
import { useSelector, useDispatch } from 'react-redux';
import { addPostAction } from '../../reducers/post';

// PostForm 컴포넌트
const PostForm = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  const [ text, setText ] = useState('');
  const imageInput = useRef();

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, [text]);

  // 폼 데이터 제출 함수
  // - text가 업데이트될 때마다 함수를 새로 생성하여, 항상 text의 최신 값을 사용
  const onSubmitPostForm = useCallback(() => {
    console.log(text);
    dispatch(addPostAction());
    setText('');
  }, [text]);

  const onClickImageUpload = useCallback(() => {
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
        onFinish={onSubmitPostForm}
      >
        <TextArea
          value={text}
          placeholder="What's happening?"
          rows={4}
          maxLength={140}
          onChange={onChangeText}
        />
        
        <div style={{ marginTop: 10, textAlign: 'right' }}>
          <input type="file" multiple hidden ref={imageInput} />
          <Button onClick={onClickImageUpload}>Upload Image</Button>
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