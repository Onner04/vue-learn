import csrf from "@/config/csrf";
import axios from 'axios';
import { createStore } from "vuex";

export const store = createStore({
    state: {
        authCheck : false,
        token: null , 
        user:null,
    },
    mutations : {
        login (state , {authCheck, token , user}) {
            state.authCheck = true
            state.token = token 
            state.user = user
        }
    },
    actions: {
        async login ({commit} ,{email , password}) {
            await csrf.getCookie()
            const response = await axios.post('http://127.0.0.1:8000/api/auth/login',{
                email:email,
                password:password,
            })
            console.log(response);
            commit('login',{authCheck:true , token:response.token , user:response.user})
        }
    }
})
export default store