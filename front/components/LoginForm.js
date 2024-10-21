import React, { useState, useCallback, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { LOG_IN_REQUEST } from '../reducers/user';

// 스타일드 컴포넌트
// - 다른 컴포넌트에서도 자주 쓰이는 스타일이라 export
export const StyledWrapper = styled.div`
  margin-top: 30px;
`;

// LoginForm 컴포넌트
const LoginForm = () => {
  const { isLoggedIn } = useSelector((state) => state.user);

  // 디스패치 함수 가져오기
  const dispatch = useDispatch();

  // ID 상태와 변경 함수
  const [id, setId] = useState('');
  const handleIdChange = useCallback((e) => {
    setId(e.target.value);
  }, []);

  // Password 상태와 변경 함수
  // - 컴포넌트에 props로 넘겨주는 함수는 useCallback 꼭 사용
  const [password, setPassword] = useState('');
  const handlePasswordChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  // 폼 제출 함수
  // - 컴포넌트에 넣는 거라 useCallback으로 감쌈
  // - e.preventDefault() 생략함. onFinish에 이미 preventDefault 적용돼 있음
  // - 세터 함수(setId, setPassword 등)는 이곳에 넣지 않음. 송신했는데 서버 에러 시 기존에 쓴 내용이 다 지워지기 때문
  const handleFormSubmit = useCallback(() => { 
    dispatch({
      type: LOG_IN_REQUEST,
      data: { id, password },
    });
  }, [id, password]);

  // LOG_IN_SUCCESS 후에 id와 password 값 없애기
  // - id와 password 값을 null로 변경하고 나서 빈 값 할당(순서를 지키기 위해 setTimeout 사용)
  // - 캐시 때문에 로그인 성공 후에도 id, password가 빈 값이 되지 않을 수 있음. 그땐 시크릿 탭에서 실행할 것
  // - 클린업 함수: 컴포넌트 언마운트/업데이트 직전에 호출됨. 이때 로그 찍어보면 id, password는 빈 값, isLoggedIn은 false
  useEffect(() => {
    if (isLoggedIn) {
      setId(null);
      setPassword(null);
      
      setTimeout(() => {
        setId('');
        setPassword('');  
      }, 0);

      setTimeout(() => {
        console.log(`LoginForm/useEffect(after login): isLoggedIn is ${isLoggedIn}, ${id}, ${password}`);
      }, 10);
    }
    return () => {
      console.log("Clean Up!");
      console.log("LoginForm/useEffect/cleanUp: ", id, password, isLoggedIn);
    };
  }, [isLoggedIn]);

  return (
    // 폼
    <Form onFinish={handleFormSubmit}>
      {/* 아이디 입력란 */}
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={handleIdChange} required />
      </div>
      
      {/* 비밀번호 입력란 */}
      <div>
        <label htmlFor="user-password">Password</label>
        <br />
        <Input 
          name="user-password" 
          type="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>

      {/* 버튼 래퍼
      - 버튼을 감싸는 <div>의 스타일을 Styled Component로 처리하여 리렌더링 최적화
      - 단, 서버 사이드 렌더링 설정을 해 줘야 리렌더링 최적화가 적용됨 // Q. 무슨 뜻? */}
      <StyledWrapper>
        {/* 로그인 버튼 */}
        <Button type="primary" htmlType="submit" loading={false}>Login</Button>
        {/* 회원가입 링크
        - <Link> 컴포넌트에 href 속성을 넣지 않거나 <a>에 href 속성을 넣으면, 아래와 같은 에러 뜸.
        - Error: Failed prop type: The prop `href` expects a `string` or `object` in `<Link>`, 
        - but got `undefined` instead. */}
        <Link href="/signup"><a><Button>Sign Up</Button></a></Link>
      </StyledWrapper>
    </Form>
  )
}

export default LoginForm;