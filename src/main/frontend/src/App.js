import React from 'react';
import Home from './Components/home';
import Header from './Components/header';
import Profile from './Components/profile';
import Manager from './Components/manager';
import Login from './Components/login';
import PrivateRoute from './Components/Manager/privateRoute'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/manager" component={Manager} isAuthenticated={ false } redirectPath="/login"/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>

  );
}

export default App;
