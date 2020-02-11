import React from 'react';
import './App.css';
import Home from './Components/home';
import NavBar from './Components/navBar';
import Profile from './Components/profile';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// const PageContainer = styled.div`
//   position: relative;
//   width: 100vw;
//   height: 100vh;
//   background-color: #e3f2fd;
//   font-family: "Open Sans", sans-serif;
// `;

function App() {

  return (
    <Router>
      <React.Fragment>
        <header className="masthead mb-auto">
          <div className="inner">
            <h3 className="masthead-brand">University of Waterloo</h3>
            <NavBar />
          </div>
        </header>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/profile" component={Profile}/>
          </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
