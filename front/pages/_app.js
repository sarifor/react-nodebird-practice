// # _app.js
// - 페이지들 공통되는 것 처리
// - 완전 다 공통인 애들용

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>NodeBird - Sarifor ver. -</title>
      </Head>
      <Component />
    </>
  )
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default NodeBird;