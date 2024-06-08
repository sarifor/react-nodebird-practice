import React from 'react';
import AppLayout from "../components/AppLayout";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  Select,
} from 'antd';

const Signup = () => { // 비번, 닉네임, 생일, 성별
  return (
    <AppLayout>
      <Form
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
        <Form.Item label="Nickname">
          <Input />
        </Form.Item>
        <Form.Item label="Gender">
          <Select>
            <Select.Option value="demo">A</Select.Option>
            <Select.Option value="demo">B</Select.Option>            
          </Select>
        </Form.Item>
        <Form.Item label="Cascader">
          <Cascader
            options={[
              {
                value: 'Kanto',
                label: 'Kanto',
                children: [
                  {
                    value: 'Tokyo',
                    label: 'Tokyo',
                  },
                  {
                    value: 'Chiba',
                    label: 'Chiba',
                  },                  
                ],
              },
              {
                value: 'Kansai',
                label: 'Kansai',
                children: [
                  {
                    value: 'Osaka',
                    label: 'Osaka',
                  },
                  {
                    value: 'Kyoto',
                    label: 'Kyoto',
                  },                  
                ],
              },              
            ]}
          />
        </Form.Item>
        <Form.Item label="Birthday">
          <DatePicker />
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
          <Input.Password />
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
          <Button>Yeeeees</Button>
        </Form.Item>
      </Form>
    </AppLayout>
  );
};
export default Signup;