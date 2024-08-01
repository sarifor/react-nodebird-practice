import React from 'react';
import { Avatar, List } from 'antd';

const UserList = ({ header, data }) => {
  //
  
  return (
    <>
      <List
        grid={{
          gutter: 10,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 4,
          xxl: 4,          
        }}
        header={header}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta // 속성명 지정됨
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="https://ant.design">{item.nickname}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default UserList;