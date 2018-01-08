import React, { Component } from 'react';
import { Spin } from 'antd';
import './Wrapper.css';

export default class Wrapper extends Component {
  render() {
    return (
      <div className="wrapper">
        { this.props.global.loading &&
          <Spin className="wrapper__loading" type="large" delay={200}></Spin> }
        { this.props.children }
      </div>
    )
  }
};