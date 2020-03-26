import configureStore  from './js/actions/stor'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/layout/layout.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './App.css';
const store = configureStore();
ReactDOM.render(
<Provider store={store}>
    <App />
  </Provider>, document.getElementById('example'));