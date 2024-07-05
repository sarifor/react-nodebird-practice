import React, { useState, useCallback } from 'react';
import useInput from '../hooks/useInput';
import AppLayout from "../components/AppLayout";
import {
  Button,
  Form,
  Input,
} from 'antd';

const Signup = () => {
  // ID Hooks 세트(Custom Hooks 사용)
  const [id, onChangeId] = useInput('');  

  // Nickname Hooks 세트(Custom Hooks 사용)
  const [nickname, onChangeNickname] = useInput('');

  // Password Hooks 세트
  const [password, setPassword] = useState('');

  // 유저 정보를 콘솔에 표시
  const onSubmitForm = useCallback(() => {
    // 모든 입력 데이터가 유효성 검사를 통과한 경우에만 유저 정보 표시
    // 예: Password와 Confirm Password가 일치하는 경우
    console.log(id, nickname, password);
  }, [id, nickname, password]);

  // 리턴
  return (
    <AppLayout>
      {/* onSubmitForm 함수는, 입력한 데이터가 유효성 검사를 통과해야 호출됨: 
      Trigger after submitting the form and verifying data successfully */}
      <Form onFinish={onSubmitForm}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        /* initialValues={{
          size: "default",
        }} */
        size="middle"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="ID">
          <Input value={id} onChange={onChangeId} />
        </Form.Item>        
        <Form.Item label="Nickname">
          <Input value={nickname} onChange={onChangeNickname} />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password value={password} onChange={ (e) => setPassword(e.target.value) } />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The new password that you entered do not match!'));
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>        
        <Form.Item label="Sign-up?">
          <Button htmlType="submit">Yeeeees</Button>
        </Form.Item>
      </Form>
    </AppLayout>
  );
};
export default Signup;