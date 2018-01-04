import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import Auth from '../helpers/auth';
import { history } from '../store';

export default class Nav extends Component {
  state = {
    current: 'home',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    if(e.key === 'logout') {
      Auth.clearToken();
      history.push('/login');
    }
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="logout" style={{ float: 'right' }}>
          <Icon type="logout" />Logout
        </Menu.Item>
      </Menu>
    )
  }
};