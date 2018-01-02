import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../actions";
import LoginForm from '../components/LoginForm'
import { Form, Button } from 'antd';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLoginForm: false
    };
    this.toggleLoginForm = this.toggleLoginForm.bind(this);
  }

  toggleLoginForm() {
    this.setState({isShowLoginForm: !this.state.isShowLoginForm});
  }

  render() {
    const WrappedLoginForm = Form.create()(LoginForm);
    return (
      <div>
        <h1>Login Page</h1>
        <Button onClick={this.toggleLoginForm}>{ this.state.isShowLoginForm ? 'Hide' : 'Show' }</Button>
        { this.state.isShowLoginForm && <WrappedLoginForm onSubmit={this.props.onSubmit} /> }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (values) => {
      dispatch(actions.submitLoginForm(values));
    }
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default Login;