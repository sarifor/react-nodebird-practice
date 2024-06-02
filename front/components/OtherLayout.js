import React from 'react';
import PropTypes from 'prop-types';

const OtherLayout = ({ children }) => {
  return (
    <div>
      <div>Hidden Menu</div>
      {children}
    </div>
  )
};

OtherLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OtherLayout;