import React, { useState, useCallback } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { loginAction } from '../reducers/user';

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

// LoginForm 컴포넌트
const LoginForm = () => {
  // 디스패치 함수 가져오기
  const dispatch = useDispatch();

  // ID 상태와 변경 함수
  const [id, setId] = useState('');
  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  // Password 상태와 변경 함수
  // - 컴포넌트에 props로 넘겨주는 함수는 useCallback 꼭 사용
  const [password, setPassword] = useState('');
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  // 폼 제출 함수
  // - 컴포넌트에 넣는 거라 useCallback으로 감쌈
  // - e.preventDefault() 생략함. onFinish에 이미 preventDefault 적용돼 있음
  const onSubmitForm = useCallback(() => { 
    // 아이디, 비밀번호 출력
    console.log(id, password);

    // 리덕스 스토어에 '로그인 액션' 디스패치
    // - 아이디와 비밀번호 값도 함께 보내기
    dispatch(loginAction({ id, password }));
  }, [id, password]);

  return (
    // 폼
    <Form onFinish={onSubmitForm}>
      {/* 아이디 입력란 */}
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      
      {/* 비밀번호 입력란 */}
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

      {/* 버튼 래퍼
      - 버튼을 감싸는 <div>의 스타일을 Styled Component로 처리하여 리렌더링 최적화
      - 단, 서버 사이드 렌더링 설정을 해 줘야 리렌더링 최적화가 적용됨 // Q. 무슨 뜻? */}
      <ButtonWrapper>
        {/* 로그인 버튼 */}
        <Button type="primary" htmlType="submit" loading={false}>Login</Button>
        {/* 회원가입 링크
        - <Link> 컴포넌트에 href 속성을 넣지 않거나 <a>에 href 속성을 넣으면, 아래와 같은 에러 뜸.
        - Error: Failed prop type: The prop `href` expects a `string` or `object` in `<Link>`, 
        - but got `undefined` instead. */}
        <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
      </ButtonWrapper>
    </Form>
  )
}

export default LoginForm;