import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../actions";
import LoginForm from '../components/LoginForm';
import Wrapper from '../components/Wrapper';
import { Form, Icon } from 'antd';
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
      <Wrapper {...this.props}>
        <div className="login" onClick={this.showLoginForm}>
          {
            this.state.isShowLoginForm &&
            <div className="login__form bounce">
              <Icon type="close" className="login__close" onClick={this.hideLoginForm} />
              <WrappedLoginForm onSubmit={this.props.onSubmit} />
            </div>
          }
        </div>
      </Wrapper>
    );
  }
};

const mapStateToProps = state => ({
  auth: state.auth,
  global: state.global
});

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (values) => {
      dispatch(actions.getAuthToken(values));
    }
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default Login;