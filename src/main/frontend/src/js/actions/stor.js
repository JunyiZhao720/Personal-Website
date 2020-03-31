import {applyMiddleware, createStore} from 'redux'
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from "./reducers";
import rootReducer from '../reducers/index';
// export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))

export default  function configureStore(preloadedState) {
  return createStore(
    reducers,
    preloadedState,
    composeWithDevTools(applyMiddleware(
      thunk,
    )),
  );
}
