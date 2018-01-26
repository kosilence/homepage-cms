import React, { Component } from 'react';
import { connect } from "react-redux";
import LoginForm from '../components/LoginForm';
import { Form, Icon } from 'antd';
import { login } from '../helpers/login';
import './Login.css';

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowLoginForm: false
    };
    this.showLoginForm = this.showLoginForm.bind(this);
    this.hideLoginForm = this.hideLoginForm.bind(this);
  }

  showLoginForm(e) {
    e.stopPropagation();
    if(!this.state.isShowLoginForm) {
      this.setState({isShowLoginForm: true});
    }
  }
  hideLoginForm(e) {
    e.stopPropagation();
    if(this.state.isShowLoginForm) {
      this.setState({isShowLoginForm: false});
    }
  }

  render() {
    const WrappedLoginForm = Form.create()(LoginForm);
    return (
      <div className="login" onClick={this.showLoginForm}>
        {
          this.state.isShowLoginForm &&
          <div className="login__form bounce">
            <Icon type="close" className="login__close" onClick={this.hideLoginForm} />
            <WrappedLoginForm onSubmit={this.props.onSubmit} />
          </div>
        }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  global: state.global
});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (values) => {
      login(values);
    }
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default Login;