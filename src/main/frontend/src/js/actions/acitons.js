import {reqLogin} from "../Api";
import {AUTH_SUCCESS,ERROR_MSG} from "./action-types"
const authSuccess = (user) =>({type:AUTH_SUCCESS,data:user});//授权成功的同步action
const errorMsg = (msg) =>({type:ERROR_MSG,data:msg});//错误失败提示信息的同步anction
export const login = (user)=>{
    const {password,email} = user
    if(!password){
        return errorMsg('password cound not be null')
    }
    if(!email){
        return errorMsg('username cound not be null')
    }

   return async dispath=>{
           const response = await reqLogin(user);//ajax requirement
           const result = response.data;
           if(result){
               dispath(authSuccess(result));
           }else{
               dispath(errorMsg("failed to login "))
           }
   }
}
