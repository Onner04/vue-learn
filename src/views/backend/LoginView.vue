<script setup>
    import csrf from '@/config/csrf';
    import router from '@/router';
    import axios from 'axios';
    import { BACKEND_API } from '@/config/constant.js'
    import {ref} from 'vue' ;
    import {useStore} from 'vuex'
    import {useRouter} from 'vue-router'
    
    const email = ref('daothanh@gmail.com')
    const password = ref('12345678')
    const formErrorMessage =ref({}) 
    const emailErrorMessage = ref('')
    const passwordErrorMessage = ref('') 
    const store = useStore() ;


    const handleLogin = async () => {
        try {
            await store.dispatch('auth/login',{email:email.value , password:password.value})    
            router.push({name:'dashboard.index'})
            
        }  catch (error) {
            
            if(error.response.status == 422){
                formErrorMessage.value = {}
                Object.keys(error.response.data.errors).forEach(key => {
                    console.log(error.response.data.errors[key][0]);
                    formErrorMessage.value[key] = error.response.data.errors[key][0]
                })
            } else{
                formErrorMessage.value.message = error.response.data.message
            }
        }
    } 

        // try {
        //     await csrf.getCookie()
        //     const response = await axios.post(BACKEND_API + 'auth/login',{
        //         email:email.value,
        //         password:password.value,
        //     })
        //     console.log(response.token);
        //     localStorage.setItem('token', response.token)
            
        //     router.push({name :'dashboard.index'})
        //     console.log(response);
        // } catch (error) {  
        //     if(error.response.status == 422){
        //         formErrorMessage.value = {}
        //         Object.keys(error.response.data.errors).forEach(key => {
        //             console.log(error.response.data.errors[key][0]);
        //             formErrorMessage.value[key] = error.response.data.errors[key][0]
        //         })
        //     } else{
        //         formErrorMessage.value.message = error.response.data.message
        //     }
        // }
    

    // export default {
    //     data() {
    //         return {
    //             email:'',
    //             password:'',
    //             emailErrorMessage:'',
    //             passwordErrorMessgae:'',
    //         }
    //     },
    //     methods: {
    //         async handleLogin() {
    //             try {
    //                 const response = await  axios.post(BACKEND_API + 'auth/login',{
    //                     email: this.email ,
    //                     password : this.password ,
    //                 })
    //                if(response.status == 401){
    //                     this.emailErrorMessage = response.data.email
    //                     this.passwordErrorMessgae = response.data.password
    //                }
    //                else{
    //                 console.log(response);
    //                }
                    
    //             } catch (error) {
    //                 if(error.response.status == 401){
    //                     this.emailErrorMessage = error.response.data.message
    //                     this.passwordErrorMessgae = ''
    //                 } 
    //                 console.log(error);  
    //             }                                            
    //         }
    //     }
    // }
</script>

<template>
    <div class="app">
        <div class="login">
            <h1 class="login-title">Đăng nhập để quản lý shop</h1>
            <form @submit.prevent="handleLogin">

                <div class="form-login">
                    <div class="form-login-label">
                        <div class="form-login-label-select">
                            <p class="form-login-lable-select__title">Tài khoản</p>
                            <input v-model="email" type="email" class="form-login-lable-select__input" placeholder="nhập tài khoản ....">
                            <div v-if="formErrorMessage.email" class="form-error">
                            {{formErrorMessage.email}}
                            </div>
                        </div>
                        <div class="form-login-label-select">
                            <p class="form-login-lable-select__title">Mật khẩu</p>
                            <input v-model="password" type="password" class="form-login-lable-select__input" placeholder="nhập mật khẩu ....">
                            <div v-if="formErrorMessage.password" class="form-error">
                            {{formErrorMessage.password}}
                            </div>
                        </div>
                        <div class="form-login-label-helper">

                        <a href="#" class="form-login-label-helper__item">Quên mật khẩu ? </a>
                        </div>

                        <div class="form-login-label-other">
                            <div class="form-login-label-other__item">
                                <i class="fa-brands fa-facebook login-icon"></i>
                                <a href="#" class="login-link">facebook</a>
                            </div>
                            <div class="form-login-label-other__item">
                            <i class="fa-brands fa-google login-icon"></i>
                                <a href="#" class="login-link">google</a>
                            </div>
                            <div class="form-login-label-other__item">
                                <i class="fa-brands fa-instagram login-icon"></i>
                                <a href="#" class="login-link">instagram</a>
                            </div>
                        </div>

                        <div class="form-login-label-btn">
                            <button class="btn-login">Đăng nhập</button>
                        </div>

                    </div>

                    <div class="form-login-img">
                        <img src="@/assets/backend/img/img-login.avif" alt="" class="form-login-img__item">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>


<style scoped>
    .app{
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-image: url(@/assets/backend/img/shop-login.avif) ;
        background-repeat: no-repeat;
    }
    .login-title{
        text-align: center;
        font-size: 3.5rem;
        margin-bottom: 45px;
    }
    .form-login{ 
        display: flex;
        justify-content: center;
        margin-bottom: 135px;
    }
    .form-login-label{
        margin: 0 10px;
        padding: 0 10px 0 20px;
        background-color: rgba(255, 255, 255, 0.7);
        border-radius: 3px;
        
    }
    .form-login-label-select{
        margin-top: 10px;
    }
    .form-login-lable-select__title{
        margin-top: 25px;
        font-size: 1.4rem;
        font-weight: 600;
    }
    .form-login-lable-select__input{
        padding: 0 120px 0 10px;
        height: 25px ;
        border: none;
        background-color: rgb(255, 255, 255);
        border-radius: 15px;
        margin-top: 5px;
    }
    .form-login-label-helper{
        margin-top: 20px;
    }
    .form-login-label-helper__item{
        padding: 20px 0;
        font-size: 1.2rem;
        color: #fc0505;
        text-decoration: none;
    }
    .form-login-label-other{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }
    .form-login-label-other__item{
        background-color: #fff;
        border-radius: 4px;
        
        padding: 0px 15px;
        height: 25px ;
        line-height: 25px;
        margin: 0 3px ;
    }
    .login-icon{
        font-size: 1.5rem;
    }
    .form-error{
        color: #eb0606;
    }
    .login-link{
        font-size: 1.2rem;
        text-decoration: none;
        color: #000;
        padding: 0 5px ;
    }
    .form-login-label-btn{
        margin-top: 50px;
        text-align: center;
    }
    .btn-login{
        padding: 0 50px ;
        height: 30px ;
        border: none;
        border-radius: 15px;
        background-color: #fd9696;
        color: #fff;
        font-size: 1.5rem;
        font-weight: 600;
    }
    .form-login-label{
        width: 40%;
    }    
    .form-login-img{
        width: 40%;
    }
    .form-login-img__item{
        width: 100%;
        height: 350px;
        border-radius: 3px;
    }
     .btn-login:hover{
        cursor: pointer;
        background-color: #ff7878;
    }
</style>