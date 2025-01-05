// 리액트 관련
import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import { PostImages } from './';
import CommentForm from '../CommentForm';
import CommentList from '../CommentList';
import PostCardContent from './PostCardContent';

import styled from 'styled-components';

// Ant Design 관련
import { Card, Typography, Space } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';
const { Text } = Typography;

// 리덕스 관련
import { useSelector } from 'react-redux';

// 댓글란을 감싸는 스타일드 컴포넌트
// - 안쪽 <div>의 스타일도 지정해줌으로,
// - 변수명을 또 짓는 수고 줄어듦. 스타일드 컴포넌트 최소화됨
const Wrapper = styled.div`
  margin-top: 20px;

  & > div {
    margin-top: 20px;
  }
`;

// PostCard 컴포넌트
// - 비구조화 할당 문법으로 props의 내부 데이터인 post 바로 사용
const PostCard = ({ post }) => {
  // 유저 정보
  const userInfo = useSelector((state) => state.user.userInfo);
  const id = userInfo?.id;
  
  // Liked 상태
  const [ liked, setLiked ] = useState(false);

  // Comment 상태
  const [ commentOpened, setCommentOpened ] = useState(false);

  // Liked 상태 토글 함수
  // - 상태 변경 함수에 함수 인자를 전달하면, 이전 상태를 기반으로 다음 상태를 업데이트(최신값 보장)
  const handleHeartToggle = useCallback(() => {
    setLiked((prev) => !prev);
  }, [liked]);

  // commentOepend 상태 토글 함수
  const handleCommentToggle = useCallback(() => {
    setCommentOpened((prev) => !prev);
  }, [commentOpened]);

  // 버튼 배열
  // - 배열 안에 JSX 요소를 넣을 때는 항상 key를 붙여줘야 함
  const actions = [
    <RetweetOutlined key="retweet" />,
    liked
      ? <HeartTwoTone key="hearttwo" twoToneColor="pink" onClick={handleHeartToggle} />
      : <HeartOutlined key="heartout" onClick={handleHeartToggle} />,
    <CommentOutlined key="comment" onClick={handleCommentToggle} />,
    <ShareAltOutlined key="sharealt" />
  ];

  if (id && post.User.id === id) {
    actions.push(<div key="modify">Modify</div>);
    actions.push(<div key="delete">Delete</div>);
  } else {
    actions.push(<div key="report">Report</div>);
  }

  // 컴포넌트 렌더링
  // - 포스트에 이미지 있으면 보여줌
  // - Q. 작성자, 글, 사진 순으로 오게 하려면?
  return (
    <>
      <Card 
        style={{ width: 'auto', margin: 'auto', marginTop: 20 }}
        cover={post.Images?.length > 0 && <PostImages images={post.Images} />}
        actions={actions}
      >
        <Card.Meta
          title={
            <Space direction="vertical">
              <Text strong></Text>
              <Text type="secondary">date</Text>
            </Space>
          }
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      {commentOpened && (
        <Wrapper>
          <CommentForm post={post} />
          <div>
            {post.Comments.length > 0 && <CommentList comments={post.Comments} />}
          </div>
        </Wrapper>
      )}
    </>
  );
};

// 컴포넌트 props 타입 검사
PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.object),
    Comments: PropTypes.arrayOf(PropTypes.object),
    createdAt: PropTypes.object,
  }).isRequired,
}

export default PostCard;