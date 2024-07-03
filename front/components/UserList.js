import React from 'react';
import { Avatar, List } from 'antd';

const UserList = ({ header, data }) => {
  //
  
  return (
    <>
      <List
        grid={{ // Q. 객체 부분을 최적화시키려면?
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

// UserList 컴포넌트의 props 검증
//

export default UserList;