// 리액트 관련
import React, { useState, useCallback } from 'react';
import useInput from '../hooks/useInput';
import AppLayout from "../components/AppLayout";

// Ant Design 관련
import { Button, Form, Input } from 'antd';

// 리덕스 관련
import { useSelector } from 'react-redux';

// Signup 컴포넌트
const Signup = () => {
  // 리덕스에서 로그인 여부 상태 가져오기
  const { isLoggedIn } = useSelector((state) => state.user);

  // ID Hooks 세트(Custom Hooks 사용)
  const [id, handleIdChange] = useInput('');  

  // Nickname Hooks 세트(Custom Hooks 사용)
  const [nickname, handleNicknameChange] = useInput('');

  // Password Hooks 세트
  const [password, setPassword] = useState('');

  // 유저 정보를 콘솔에 표시
  // - 모든 입력 데이터가 유효성 검사를 통과한 경우에만 유저 정보 표시
  // - 예: Password와 Confirm Password가 일치하는 경우  
  const handleFormSubmit = useCallback(() => {
    console.log(id, nickname, password);
  }, [id, nickname, password]);

  // 컴포넌트 렌더링
  // - onSubmitForm 함수는, 입력한 데이터가 유효성 검사를 통과해야 호출됨: 
  // - Trigger after submitting the form and verifying data successfully
  return (
    <AppLayout>
      {!isLoggedIn
      ? (<>
          <Form onFinish={handleFormSubmit}
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
              <Input value={id} onChange={handleIdChange} />
            </Form.Item>        
            <Form.Item label="Nickname">
              <Input value={nickname} onChange={handleNicknameChange} />
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
        </>)
      : (<div>You are already our user!</div>)}
    </AppLayout>
  );
};
export default Signup;