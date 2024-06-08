import React from 'react';
import { SignatureOutlined, HeartOutlined, TeamOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

const UserProfile = () => {
  return (
    <>
      <Card
        style={{
          width: 300,
        }}
        cover={
          <img
            alt="Hello Kitty"
            src="https://www.sanrio.co.jp/wp-content/uploads/2022/06/mv-hellokitty.png"
          />
        }
        actions={[ // React JSX 배열에선 키 붙여줘야 함
          <SignatureOutlined key="tweet" />,
          <HeartOutlined key="followings" />,
          <TeamOutlined key="followers" />,
        ]}
      >
        <Meta
          // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </>
  )
}

export default UserProfile;