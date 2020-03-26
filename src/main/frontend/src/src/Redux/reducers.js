import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG} from "./action-types"

const REQUEST_ISSUES = 'REQUEST_ISSUES';
const RECEIVE_ISSUES = 'RECEIVE_ISSUES';
function issues(state = {
  isFetching: false,
  items: [],
}, action) {
  switch (action.type) {
    case REQUEST_ISSUES:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_ISSUES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts,
      });
    default:
      return state;
  }
}

export default issues;
/*const initUser ={
    password:'',
    email:'',
    msg:''//error msg

}
function user(state=initUser,action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return action.data;
        case ERROR_MSG:
            return {...initUser, msg: action.data};
        default:
            return state;

    }
}*/
//export const reducers = combineReducers({issues,user})
