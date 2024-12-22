<script setup>
    import store from '@/store';
    import { onBeforeMount } from 'vue';
    import  NavBar from './Navbar.vue';
    import Header from './Header.vue'

    const setToken = () => {
        const token = localStorage.getItem('token')
       store.commit('auth/setToken' , token)
        
    }
    onBeforeMount(() => {
        setToken()
    }) 

</script>

<template>
    <div class="container" id="page-wrapper">
        <div class="container-color"></div>
         <Header />
         <NavBar /> 
        <slot name="template"> </slot>
    </div>
</template>

<style scoped>
   .container{
    display: flex ;
    position: relative;
    flex: 1;
    max-height: 1280px;
    background-color: #f3f0f0;
   }
   .container-color{
    position: absolute;
    top: 0;
    height: 200px;
    background-color:  #fb6340;
    width: 100%;
   }
</style>