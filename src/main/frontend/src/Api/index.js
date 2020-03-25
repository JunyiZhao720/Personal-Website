import ajax from "./ajax";
export const reqLogin=({password,email})=>ajax('/api/user/login',{password,email},'Post');
