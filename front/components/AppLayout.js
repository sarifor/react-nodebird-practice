// # AppLayout.js
// - 일부 공통인 애들용

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Row, Col } from 'antd';
import { Input } from 'antd';
import styled from 'styled-components';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const Search = styled(Input.Search)`
  vertical-align: middle;
`;

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
    label: <Search placeholder="input hashtag" enterButton="Search" />,
    key: 'search',
  },    
];
const AppLayout = ({ children }) => {
  // 서버 대신 더미 데이터 사용
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Q. setIsLoggedIn은 useCallback으로 감싸지 않아도 되나?

  const router = useRouter();
  const current = router.pathname;

  return (
    <div>
      <Menu selectedKeys={[current]} mode="horizontal">
        {items.map(item => (
          <Menu.Item key={item.key}>
            {item.label}
          </Menu.Item>
        ))}
      </Menu>
      <Row> {/* 작은 화면에서는 세 Col이 수직으로 쌓이고, 중간 이상 화면에서는 수평으로 배치 */}
        <Col xs={24} md={6}>
          {/* isLoggedIn 상태 변경 함수를 보내줌으로, 자식 컴포넌트에서 부모 컴포넌트의 상태를 변경 가능하게 함 */}
          {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} /> }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/sarifor" target="_blank" rel="noreferrer noopener">Sarifor!</a>
        </Col>
      </Row>
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;