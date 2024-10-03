import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { Button, Form, Input } from 'antd';
const { Item } = Form;
const { TextArea } = Input;

import { useDispatch, useSelector } from 'react-redux';

import { ADD_COMMENT_REQUEST } from '../reducers/post';

// CommentForm 컴포넌트
// - 포스트 작성자 아이디, 댓글 작성자 아이디, 댓글 데이터를 서버에 송신
const CommentForm = ({ post }) => {
  const dispatch = useDispatch();

  const postId = post?.id;
  const userId = useSelector(state => state.user.userInfo?.id)

  const [ comment, setComment ] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  }

  const handleFormSubmit = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { userId, postId, comment },
    })
  }, [comment]);

  return (
    <div style={{ marginTop: 10, textAlign: 'right' }}>
      <Form onFinish={handleFormSubmit}>
        <Item>
          <TextArea rows={4} onChange={handleCommentChange} value={comment} />
        </Item>
        <Item>
          <Button htmlType="submit" type="primary">
            Add Comment
          </Button>
        </Item>
      </Form>
    </div>
  )
};

CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;