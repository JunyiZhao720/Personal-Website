import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG} from "./action-types"
const initUser ={
    password:'',
    email:'',
    msg:''//error msg

}
export function user(state=initUser,action){
    switch (action.type) {
        case AUTH_SUCCESS:
            return action.data;
        case ERROR_MSG:
            return {...initUser, msg: action.data};
        default:
            return state;

    }
}
export default combineReducers({
    user}
)//向
