import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './js/containers/home';
import Blog from './js/containers/blog';
import Profile from './js/components/profile/profile';
import Manager from './js/components/manager';
import Login from './js/containers/login/login';
import PrivateRoute from './js/containers/Manager/privateRoute'
import {login} from "./js/actions/acitons";
import { Provider } from 'react-redux';
import configureStore  from './js/actions/stor'

const store = configureStore();


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <Route path="/profile" component={Profile}/>
                <Route path="/login" component={Login} />
                <PrivateRoute path="/manager" component={Manager} isAuthenticated={ true } redirectPath="/login"/>
              </Switch>
        </BrowserRouter>

        {/* <Switch>

            <Route path = '/login' component={Login}/>
            <Route component={App}/>
        </Switch> */}
      </Provider>



    );
  }
}
