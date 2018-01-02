import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

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

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('user')(
            <Input prefix={<Icon type="user" />} placeholder="Who are you ?" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password')(
            <Input prefix={<Icon type="lock" />} type="password" placeholder="Enter your password ?" />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    );
  }
};