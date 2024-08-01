// 리액트 관련
import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';

import PostImages from '../components/PostImages';

// Ant Design 관련
import { Card, Avatar, Typography, Space } from 'antd';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';
const { Text } = Typography;

// 리덕스 관련
import { useSelector } from 'react-redux';

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
  const onClickHeartToggle = useCallback(() => {
    setLiked((prev) => !prev);
  }, [liked]);

  // commentOepend 상태 토글 함수
  const onClickCommentToggle = useCallback(() => {
    setCommentOpened((prev) => !prev);
  }, [commentOpened]);

  // 버튼 배열
  // - 배열 안에 JSX 요소를 넣을 때는 항상 key를 붙여줘야 함
  const actions = [
    <RetweetOutlined key="retweet" />,
    liked
      ? <HeartTwoTone key="hearttwo" twoToneColor="pink" onClick={onClickHeartToggle} />
      : <HeartOutlined key="heartout" onClick={onClickHeartToggle} />,
    <CommentOutlined key="comment" onClick={onClickCommentToggle} />,
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
  return (
    <>
      <Card 
        style={{ width: 'auto', margin: 'auto', marginTop: 20 }}
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={actions}
      >
        <Card.Meta
          avatar={<Avatar src="" />}
          title={
            <Space direction="vertical">
              <Text strong></Text>
              <Text type="secondary">date</Text>
            </Space>
          }
          description={post.content}
        />
      </Card>
      {commentOpened && (
        <div>Comment</div>
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