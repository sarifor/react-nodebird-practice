import React from 'react';
import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { List, Comment } from 'antd';

// 댓글 리스트
// - JSX에서 자바스크립트 표현식을 사용하려면 {}로 감싸기
const CommentList = ({ comments }) => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const userId = userInfo?.id;

  return (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
      itemLayout="horizontal"
      renderItem={
        (comment) =>
          <Comment 
            key={comment.id} 
            author={comment.User.nickname} 
            content={comment.content}
            actions={
              userId && comment.User.nickname === userId
              ? [
                  <span key="modify"><button>Modify</button></span>,
                  <span key="delete"><button>Delete</button></span>,
                ]
              : []
            } 
          />
      }
    />
  )
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      User: PropTypes.object.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CommentList;