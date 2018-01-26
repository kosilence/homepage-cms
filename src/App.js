import React, { Component } from 'react';
import PrivateRoute from './components/PrivateRoute';
import Nav from './components/Nav';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Global from './containers/Global';
import Login from './containers/Login';
import Blog from './containers/Blog';
import Album from './containers/Album';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={Login}/>
        <Route render={() => {
          return(
            <div>
              <Route component={Nav}/>
              <Route component={Global}/>
              <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <PrivateRoute path="/blog" component={Blog}/>
                <PrivateRoute path="/album" component={Album}/>
                <PrivateRoute component={NotFound}/>
              </Switch>
            </div>
          )
        }} />
      </Switch>
    );
  }
}

export default App;
