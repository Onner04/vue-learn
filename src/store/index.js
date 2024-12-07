import csrf from "@/config/csrf";
import axios from 'axios';
import { createStore } from "vuex";
import authStore from '@/store/auth/auth'
import auth from "@/store/auth/auth";

export const store = createStore({
    modules : {
        auth : authStore
    }
})
export default store