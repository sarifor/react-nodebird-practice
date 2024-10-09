// 리액트 관련
import React, { useState, useCallback, useEffect } from 'react';
import useInput from '../hooks/useInput';
import AppLayout from "../components/AppLayout";

// Next.js 관련
import { useRouter } from 'next/router';

// Ant Design 관련
import { Button, Form, Input } from 'antd';

// 리덕스 관련
import { useSelector, useDispatch } from 'react-redux';
import { SIGNUP_REQUEST } from '../reducers/user';

// Signup 컴포넌트
// - Custom Hooks useInput에는 set 함수 내장되어 있음
// - 모든 입력 데이터가 유효성 검사를 통과한 경우에만 SIGNUP_REQUEST
// - Q. router.push('./index'); (X)  router.push('/'); (O)  이유?
const Signup = () => {
  const { isLoggedIn, isSignUpError } = useSelector((state) => state.user);

  const [id, handleIdChange] = useInput('');  
  const [nickname, handleNicknameChange] = useInput('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/');
    }
  }, [isLoggedIn]);
   
  const handleSignUpFormSubmit = useCallback(() => {
    dispatch({
      type: SIGNUP_REQUEST,
      data: { id, nickname, password },
    });
  }, [id, nickname, password]);

  return (
    <AppLayout>
      {!isLoggedIn
      ? (<>
          {isSignUpError && <div>You failed to sign up. Please try again</div>}
          <Form onFinish={handleSignUpFormSubmit}
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