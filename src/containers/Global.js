import React, { Component } from 'react';
import { connect } from "react-redux";
import { actions } from "../actions";
import { Spin, message } from 'antd';

import './Global.css';

class GlobalContainer extends Component {
  componentWillReceiveProps(nextProps) {
    const { alert } = nextProps.global;
    if(!this.props.global.alert.display && alert.display) {
      if(alert.type === 'success') {
        message.success(alert.msg, 1, this.props.onAlertHide);
      }else {
        message.fail(alert.msg, 1, this.props.onAlertHide);
      }
    }
  }
  render() {
    const { loading } = this.props.global;
    return (
      <div>
        {
          loading &&
          <Spin className="global__loading" type="large" delay={200} />
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
    onAlertHide: () => {
      dispatch(actions.hideAlert());
    }
  };
};

const Global = connect(mapStateToProps, mapDispatchToProps)(GlobalContainer);

export default Global;