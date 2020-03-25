import Home from '../Components/home';
import Profile from '../Components/profile';
import Manager from './Manager/manager';
import Login from './login';
import {connect} from 'react-redux';
import PrivateRoute from './Manager/privateRoute'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import React,{Component} from "react"
import {login} from "../Redux/acitons";

/*function App() {

  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />

          <PrivateRoute path="/manager" component={Manager} isAuthenticated={ false } redirectPath="/login"/>
        </Switch>
      </React.Fragment>
    </BrowserRouter>

  );
}*/

 class App extends Component {

    render() {
        // const{email} = this.props.user;
        // //如果有值说明需要重定向
        // if(email){
        //     return <Redirect to ='/manager'/>
        //  }else{
        //      return <Redirect to ='/login'/>
        //  }//wrong try
        return(
            <BrowserRouter>
              <React.Fragment>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/profile" component={Profile} />
                  <Route path="/login" component={Login} />
                  {/*<Route path="/manager" component={Manager} />*/}
                  <PrivateRoute path="/manager" component={Manager} isAuthenticated={ false } redirectPath="/login"/>
                </Switch>
              </React.Fragment>
            </BrowserRouter>

        )
    }

}

export default connect(
    state =>({user:state.user}),
    {}
)(App);
