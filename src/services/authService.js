import api from "./api";
import Signup from "../auth/signup";
import Login from "../auth/login";

const authService = {
    login: async (name,pass)=>{
        try{
        const res= await api.post('/login',{name, pass}) //since both name and user entered name + password same else name:username, pass:password
        return res.data;
       }catch(error){
            console.log(error);
            return error;
       }
    },
    signup:async (mail,name,pass)=>{
        try{
        const res= await api.post('/signup',{mail, name, pass}) //since both name and user entered name + password same else name:username, pass:password
        return res.data;
       }catch(error){
            console.log(error);
            return error;
       }
    }
}
export default authService;