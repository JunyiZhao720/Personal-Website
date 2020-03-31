import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './js/containers/home';
import Blog from './js/containers/blog';
import Profile from './js/components/profile/profile';
import Manager from './js/components/manager';
import Login from './js/components/login/login';
import PrivateRoute from './js/components/Manager/privateRoute'
import {login} from "./js/actions/acitons";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/profile" component={Profile}/>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/manager" component={Manager} isAuthenticated={ true } redirectPath="/login"/>
          </Switch>
      </React.Fragment>
    </BrowserRouter>
    );
  }
}
