import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import stor from './Redux/stor'
import {HashRouter,Route,Switch} from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Provider} from 'react-redux'

import Login from "./Containers/login";


ReactDOM.render(
    (<Provider store ={stor}>
        <HashRouter>

            <Switch>

                <Route path = '/login' component={Login}/>
                <Route component={App}/>
            </Switch>
        </HashRouter>
    </Provider>),

    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
