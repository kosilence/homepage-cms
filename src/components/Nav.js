import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { logout } from '../helpers/login';
import { history } from '../store';

export default class Nav extends Component {
  state = {
    current: 'home',
  }

  componentDidMount() {
    this.initPathSelected();
  }

  initPathSelected = () => {
    let path = history.location.pathname;
    let keyName = '';
    switch(path) {
      case '/':
        keyName = 'home';
        break;
      case '/blog':
        keyName = 'blog';
        break;
      case '/album':
        keyName = 'album';
        break;
      default:
        keyName = '';
        break;
    }
    this.setState({
      current: keyName
    });
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
    if(e.key === 'logout') {
      logout();
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
        <Menu.Item key="blog">
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="album">
          <Link to="/album">Album</Link>
        </Menu.Item>
        <Menu.Item key="logout" style={{ float: 'right' }}>
          <Icon type="logout" />Logout
        </Menu.Item>
      </Menu>
    )
  }
};