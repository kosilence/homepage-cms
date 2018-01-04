import React, { Component } from 'react';
import { store } from '../store';

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log(store.getState());
  }

  render() {
    return <h1>Welcome Home!</h1>
  }
};