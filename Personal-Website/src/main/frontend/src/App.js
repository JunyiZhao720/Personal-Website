import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './js/containers/home';
import Blog from './js/containers/blog';
import Header from './js/components/header/header';
import Profile from './js/components/profile/profile';
import Manager from './js/components/manager';
import Login from './js/components/login/login';
import PrivateRoute from './js/components/Manager/privateRoute'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <React.Fragment>
        <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/profile" component={Profile}/>
            <Route path="/login" component={Login} />
            <PrivateRoute path="/manager" component={Manager} isAuthenticated={ false } redirectPath="/login"/>
          </Switch>
      </React.Fragment>
    </BrowserRouter>
    );
  }
}
