import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>
        <Link href="/"><a>Home</a></Link> {/* <Link><a> 함께 쓰기 */}
        <Link href="/profile"><a>Profile</a></Link>
        <Link href="/signup"><a>Sign Up</a></Link>
      </div>
      {children}
    </div>
  )
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired, // 리액트의 노드. 화면에 그릴 수 있는 모든 것들
};

export default AppLayout;