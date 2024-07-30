import React from 'react';

const PostImages = ({images}) => {
  return (
    images.map((img) => <img key={img.src} src={img.src} />)
  )
}

export default PostImages;