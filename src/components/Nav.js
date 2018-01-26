import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { logout } from '../helpers/login';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: this.props.location.pathname
    }
  }

  componentWillReceiveProps(nextProps) {
    const { location } = nextProps;
    this.setState({ current: location.pathname });
  }

  handleClick = (e) => {
    if(e.key === 'logout') {
      logout();
      return;
    }
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal">
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/blog">
          <Link to="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="/album">
          <Link to="/album">Album</Link>
        </Menu.Item>
        <Menu.Item key="logout" style={{ float: 'right' }}>
          <Icon type="logout" />Logout
        </Menu.Item>
      </Menu>
    )
  }
};