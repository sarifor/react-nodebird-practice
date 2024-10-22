import React from 'react';
import PropTypes from 'prop-types';

import { List, Comment } from 'antd';

const CommentList = ({ comments }) => {
  console.log(comments);

  return (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={
        (comment) => <Comment key={comment.id} author={comment.User.nickname} content={comment.content} />
      }
    />
  )
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      User: PropTypes.object.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentList;