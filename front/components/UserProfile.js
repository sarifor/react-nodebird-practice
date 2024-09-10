import React, { useCallback } from 'react';
import { SignatureOutlined, HeartOutlined, TeamOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';
import { useDispatch } from 'react-redux';

const { Meta } = Card;

// UserProfile 컴포넌트
const UserProfile = () => {
  // 디스패치 함수 가져오기
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    // 리덕스 스토어에 '액션' 디스패치
    // - 같이 보내는 데이터는 없음
    dispatch({
      type: 'LOG_OUT_REQUEST',
    });
  }, []);

  return (
    <>
      {/* 프로필 카드 */}
      <Card
        // 스타일
        style={{
          width: 300,
        }}

        // 사진
        cover={
          <img
            alt="Hello Kitty"
            src="https://www.sanrio.co.jp/wp-content/uploads/2022/06/mv-hellokitty.png"
          />
        }

        // 메뉴 아이콘
        // - React JSX 배열이므로 키 붙여주기
        actions={[
          <SignatureOutlined key="tweet" />,
          <HeartOutlined key="followings" />,
          <TeamOutlined key="followers" />,
        ]}
      >
        {/* 정보 */}
        <Meta
          // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title="Card title"
          description="This is the description"
        />
      </Card>

      {/* 로그아웃 버튼 */}
      <Button onClick={handleLogout}>Logout</Button>
    </>
  )
}

export default UserProfile;