import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './LoginForm.css';

export default class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onSubmit(values);
      }
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="loginForm">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input username!' }],
          })(
            <Input prefix={<Icon type="user" />} placeholder="Who are you ?" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input Password!' }],
          })(
            <Input prefix={<Icon type="lock" />} type="password" placeholder="Enter your password ?" />
          )}
        </Form.Item>
        <Form.Item>
          <Button ghost className="loginForm__btn" onClick={this.handleReset}>Reset</Button>
          <Button ghost className="loginForm__btn" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    );
  }
};