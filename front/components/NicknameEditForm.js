import React, { useMemo } from 'react';
import { Form, Input } from 'antd';

const NicknameEditForm = () => {
  const style = useMemo(() => ({ // styled component 대신 useMemo 쓴 경우
    padding: '30px',
  }))

  return (
    <Form style={style}>   
      <Input.Search placeholder="Input new nickname" enterButton="Update" />
    </Form>
  )
}

export default NicknameEditForm;