import React from 'react';
import PropTypes from 'prop-types';

import { StyledWrapper } from '../LoginForm';

import { Image } from 'antd';

const PostImages = ({images}) => {
  return (
    <StyledWrapper>
      <Image.PreviewGroup>
        {images.map((img) => <Image key={img.src} width={200} src={img.src} alt={img.alt} role="presentation" />)}
      </Image.PreviewGroup>
    </StyledWrapper>
  )
};

PostImages.propTypes = {
  images: PropTypes.object,
}

export default PostImages;