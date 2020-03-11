import React from 'react';
import Home from './Components/home';
import NavBar from './Components/navBar';
import Profile from './Components/profile';
import Manager from './Components/manager';
import Login from './Components/login';
import PrivateRoute from './Components/Manage/privateRoute'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        {/* protected pages */}
        <Switch>
          <PrivateRoute path="/manager" component={Manager} isAuthenticated={ false } redirectPath="/login"/>
          <Route path="/login" component={Login} />
        </Switch>

        {/* public pages */}
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">University of Waterloo</h3>
            <NavBar />
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>

  );
}

export default App;
