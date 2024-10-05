import React, { useMemo, useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { EDIT_NICKNAME_REQUEST } from '../reducers/user';

// 닉네임 수정 폼
// - Q. 아래 궁금한 점 해결하기
//   handleNewNicknameChange는 의존성 배열 필요 X,
//   handleFormSubmit은 의존성 배열 필요 O
// - Input /= Input.Search
const NicknameEditForm = () => {
  const dispatch = useDispatch();

  const style = useMemo(() => ({ // styled component 대신 useMemo 쓴 경우
    padding: '30px',
  }))
  const nickname = useSelector((state) => state.user.userInfo.nickname);
  const [newNickname, setNewNickname] = useState('');

  const handleNewNicknameChange = useCallback((e) => {
    setNewNickname(e.target.value);
  }, []);

  const handleFormSubmit = useCallback(() => {
    dispatch({
      type: EDIT_NICKNAME_REQUEST,
      data: { newNickname }
    });
  }, [newNickname]);

  return (
    <Form style={style} onFinish={handleFormSubmit}>   
      <Input placeholder={nickname} onChange={handleNewNicknameChange} required />
      <Button type="primary" htmlType="submit">Update</Button>
    </Form>
  )
}

export default NicknameEditForm;