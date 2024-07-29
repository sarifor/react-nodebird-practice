// 리액트 관련
import React, { useState, useRef, useCallback } from 'react';

// antd 관련
import { Form, Input, Button } from 'antd';
const { TextArea } = Input;

// 리덕스 관련
import { useDispatch } from 'react-redux';
import { addPostAction } from '../reducers/post';

const PostForm = () => {
  const [ text, setText ] = useState('blank');
  const dispatch = useDispatch();
  const imageInput = useRef();

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, [text]);

  const onSubmitPostForm = useCallback(() => {   
    dispatch(addPostAction());
    setText('');
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <>
      {/* 포스트 작성 폼
        - 입력란
        - 이미지 업로드 버튼
        - 포스트 제출 버튼 */}
      <Form 
        style={{ margin: 'auto', marginTop: 20 }}
        onFinish={onSubmitPostForm}
      >
        <TextArea
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
      </Form>    
    </>
  );
};

export default PostForm;