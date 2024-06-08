import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  // ID Hooks 세트
  const [id, setId] = useState('');
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  // Password Hooks 세트
  const [password, setPassword] = useState('');
  const onChangePassword = useCallback((e) => { // 컴포넌트에 props로 넘겨주는 함수는 useCallback 꼭 사용
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => { // 컴포넌트에 넣는 거라 useCallback으로 감쌈
    // e.preventDefault(); // onFinish에 이미 preventDefault 적용되어 있음
    console.log(id, password);
    setIsLoggedIn(true);
  }, []);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input 
          name="user-password" 
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper> {/* Inline Styling 대신 Styled Component(혹은 useMemo)로 리렌더링 최적화 */}
        <Button type="primary" htmlType="submit" loading={false}>Login</Button>
        <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
      </ButtonWrapper>
    </Form>
  )
}

export default LoginForm;