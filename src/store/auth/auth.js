import csrf from "@/config/csrf";
import axios from 'axios';
const state = {
    authCheck : false,
    token: null , 
    // user:null
}
const mutations = {
    loginSuccess (state , {authCheck, token , user}) {
        state.authCheck = true
        state.token = token 
        // state.user = user
    },
    setToken(state, token){
        state.token = token
    }
}
const getters = {
    getToken : (state) => state.token
}
const actions={
        async login ({commit} ,{email , password}) {
            await csrf.getCookie()
            const response = await axios.post('http://localhost:3000/api/auth/login',{
                email:email,
                password:password,
            })
            localStorage.setItem('token',response.token)
            localStorage.setItem('token_expires' , response.token_expires_at)
            commit('loginSuccess',{authCheck:true , token:response.token })
            console.log(response);
            
        }
    }

export default {
    namespaced:true ,
    state,
    mutations,
    actions,
    getters,
}