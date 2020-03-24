import ajax from "./ajax";
export const reqLogin=({password,email})=>ajax('http://localhost:8080/api/user/login',{password,email},'Post');
