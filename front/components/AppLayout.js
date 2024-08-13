// # AppLayout.js
// - 일부 공통인 애들용

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Row, Col } from 'antd';
import { Input } from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const Global = createGlobalStyle`
  .textColorGreen {
    color: green;
  }
`;

const Search = styled(Input.Search)`
  vertical-align: middle;
`;

// AppLayout 컴포넌트
const AppLayout = ({ children }) => {
  // 로그인 여부 상태
  // - 상태가 바뀌면 AppLayout 컴포넌트는 알아서 리렌더링됨
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  // hashtag 상태
  const [hashtag, setHashtag] = useState('');

  // hashtag 상태 변경
  const handleHashtagSearch = (value) => {
    setHashtag(value);

    // 상태 출력
    // - 이 경우, 이전 상태를 출력해 버림
    // console.log(hashtag);
  };

  // hashtag 상태 최신값 출력
  // - hashtag 상태가 변경될 때마다
  useEffect(() => {
    console.log(hashtag);
  }, [hashtag])
  
  // 현재 경로 가져오기
  const router = useRouter();
  const current = router.pathname;

  const items = [
    {
      label: <Link href="/"><a>Home</a></Link>,
      key: '/',
    },
    {
      label: <Link href="/profile"><a>Profile</a></Link>,
      key: 'profile',
    },
    {
      label: <Link href="/signup"><a>Sign Up</a></Link>,
      key: 'signup',
    },  
    {
      label: <Search placeholder="input hashtag" enterButton="Search" onSearch={handleHashtagSearch} />, // onSearch: Ant Design Input.Search의 property
      key: 'search',
    },    
  ];

  /* 컴포넌트 렌더링
    1. 메뉴 강조 표시
      - 현재 경로에 따라
    2. 반응형 레이아웃
      - 작은 화면에서는 세 Col이 수직으로 쌓이고, 
      - 중간 이상 화면에서는 수평으로 배치
    3. 로그인 여부에 따라 각각 다른 컴포넌트 보여줌
      - 로그인 시 프로필 화면
      - 로그아웃 시 로그인 폼 화면
      - useState 때와 달리 상태 변경 함수를 보내줄 필요 없음
  */
  return (
    <div>
      <Global />
      <Menu selectedKeys={[current]} mode="horizontal">
        {items.map(item => (
          <Menu.Item key={item.key}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>

      <Row> 
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm /> }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a className="textColorGreen" href="https://github.com/sarifor" target="_blank" rel="noreferrer noopener">Sarifor!</a>
        </Col>
      </Row>

      <footer className="textColorGreen">Copyright free</footer>
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;