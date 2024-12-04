<script >
import store from '@/store';
import  Navbar from './Navbar.vue';
import csrf from '@/config/csrf'
import axios from 'axios';


    export default {
        data() {
            return {
                token : null ,
                user : null ,
            }
        }, 
        mounted(){
            this.setToken()
        },
        methods: {
            async setToken(){
                const token = store.state.token
                if(token){

                    try {
                        await csrf.getCookie()
                        const response = await axios.get('http://127.0.0.1:8000/api/auth/getAuthCookie')
                        this.token = response.data                     
                    }catch(error){
                       console.log(error)
                   }               
                }
            },
        }
    }
</script>

<template>
    <div class="container" id="page-wrapper">
        <div class="container-color">
        </div>

        <!-- <Navbar /> -->
        <slot name="template"> </slot>
    </div>
</template>

<style scoped>
   .container{
    display: flex ;
    position: relative;
    height: 100vh;
    
   }
   .container-color{
    position: absolute;
    top: 0;
    height: 250px;
    background-color:  #fb6340;
    width: 100%;
   }
</style>