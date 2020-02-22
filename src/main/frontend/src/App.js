import React from 'react';
import './App.css';
import Home from './Components/home';
import NavBar from './Components/navBar';
import Profile from './Components/profile';
import Manager from './Components/manager';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';


function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">University of Waterloo</h3>
            <NavBar />
          </div>
        </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/manager" component={Manager} />
            {/* <Redirect to = "/manager" /> */}
          </Switch>
      </React.Fragment>
    </BrowserRouter>

  );
}

export default App;
