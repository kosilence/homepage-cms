import React, { Component } from 'react';
import Nav from './components/Nav';
import Login from './containers/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route render={() => {
          return (<div>
            <PrivateRoute path="/" component={Nav}/>
            <PrivateRoute exact path="/" component={Home}/>
          </div>)
        }} />
      </Switch>
    );
  }
}

export default App;
