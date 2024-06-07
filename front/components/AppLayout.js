// # AppLayout.js
// - 일부 공통인 애들용

import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu } from 'antd';
import { Input } from 'antd';
const Search = Input.Search;

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
      {children}
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;