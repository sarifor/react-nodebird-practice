import React from 'react';
import PropTypes from 'prop-types';

import { Avatar, List } from 'antd';

const UserList = ({ header, data }) => {  
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
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={<a href="https://ant.design">{item}</a>}
            />
          </List.Item>
        )}
      />
    </>
  )
}

UserList.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default UserList;