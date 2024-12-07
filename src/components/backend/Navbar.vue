<script >
    import axios from '@/config/axios.js'
    import csrf from '@/config/csrf'
    import { useStore , mapGetters } from 'vuex';
    // import navBar from '@/lang/vn/navBar.js'
  
    export default {
        data() {
            return {
                navBarData : null ,
                showSubModule : false ,
                user:null ,
            }
        }, 
        mounted(){
            this.getNavBarData()
            this.getAdmin()
        },
        
        methods: {
            async getNavBarData(){
                 try {
                    await csrf.getCookie()
                    const token = localStorage.getItem('token')
                    const response = await axios.get('/dashbroad/getModule')
                    this.navBarData = response.data      
                }catch(error){
                    console.log(error)
                }               
            },
            async getAdmin() {
            if (this.$store.state.user) {
                this.user = this.$store.state.user;
                console.log(this.user.name);
            } else {
                console.log('User chưa được khởi tạo');
            }
        },
            toggleSubModule(item){
                item.showSubModule = !item.showSubModule
            }
        }
    }



    // import { ref, onMounted } from 'vue';
    // const adminLink = ref(null);
    // const childMenu = ref(null);
    // const mobileMenuToggle = ref(null);
    // const nav = ref(null);
    // const menus = ref([]);
    // const items = ref([]);
    // const arrows = ref([]);
    // const selects = ref([]);
    // onMounted(() => {
    
    //     if (adminLink.value && childMenu.value) {
    //         adminLink.value.addEventListener('click', (event) => {
    //             event.preventDefault();
    //             childMenu.value.classList.toggle('active');
    //         });
    //     }
    //     menus.value = Array.from(document.querySelectorAll('.nav-bar-list-child.nav-list-child-menu .nav-bar-list-child__content'));
    //     items.value = Array.from(document.querySelectorAll('.nav-bar-list-child__content-box'));
    //     arrows.value = Array.from(document.querySelectorAll('.child__content-icon-extend'));
    //     selects.value = Array.from(document.querySelectorAll('.nav-list-child-select'));

    //     selects.value.forEach((select, item) => {
    //         select.addEventListener('click', () => {
    //             selects.value.forEach((select, i) => {
    //                 if (i === item) {
    //                     select.classList.toggle('selected-in');
    //                 } else {
    //                     select.classList.remove('selected-in');
    //                 }
    //             });
    //         });
    //     });

    //     menus.value.forEach((menu, index) => {
    //         menu.addEventListener('click', () => {
    //             items.value.forEach((item, i) => {
    //                 if (i === index) {
    //                     item.classList.toggle('active');
    //                     arrows.value[i]?.classList.toggle('rotate');
    //                     menu.classList.toggle('selected');
    //                 } else {
    //                     item.classList.remove('active');
    //                     arrows.value[i]?.classList.remove('rotate');
    //                     menus.value[i]?.classList.remove('selected');
    //                 }
    //             });
    //         });
    //     });

    //     if (mobileMenuToggle.value && nav.value) {
    //         mobileMenuToggle.value.addEventListener('click', () => {
    //             nav.value.classList.toggle('nav-active');
    //         });
    //     }
    // });

</script>



<template>
    <div id="navbar" class="app-navbar">
        <div class="nav-box">
            <div class="nav-box-admin">
                <img src="@/assets/backend/img/admin.jpg" alt="" class="nav-box-admin__img">
                <div class="nav-box-admin__info">
                    <p  class="nav-box-admin__info-name">Đào Văn Thành</p>
                    <div class="nav-box-admin__info-status">
                        <i class="fa-solid fa-wifi admin-icon"></i>
                        <p style="padding:0 5px ;" class="nav-box-admin__info-status-item">Đang hoạt động</p>
                    </div>
                </div>
            </div>

            <div class="nav-bar">
                <ul class="nav-bar-list"> 
                    <li class="nav-bar-list-child nav-list-child-menu" v-for="item in navBarData" :key="item.name"  >
                        <div class="nav-bar-list-child__content" :class="{'selected' : item.showSubModule}"  @click.prevent = "toggleSubModule(item)">
                            <div class="box-select">
                                <div class="nav-bar-list-child__content-icon">
                                    <i :class="item.icon"></i>
                                </div>
                                <a href="#" class="nav-bar-list-child__content-title">{{item.name}}</a>
                            </div>
                            <div class="nav-bar-list-child__icon" v-if="item.subModule" >
                                <i class="fa-solid fa-chevron-left child__content-icon-extend" :class="{'rotate' : item.showSubModule}"></i>
                            </div>
                        </div>
                        <ul class="nav-bar-list-child__content-box" :class="{'active' : item.showSubModule}" v-if="item.subModule ">
                            <li class="menu-list" v-for="sub in item.subModule" :key="sub.namer">
                                <router-link :to="sub.route">{{ sub.title }}</router-link>
                            </li>
                        </ul>
                    </li>

                    <li class="nav-bar-list-child">
                        <div class="nav-bar-list-child__logout">
                            <div class="nav-bar-list-child__content-icon">
                                <i class="fa-solid fa-right-from-bracket child__content-icon-img"></i>
                            </div>
                            <a href="#" class="nav-bar-list-child__content-title">Đăng xuất</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style scoped>
    .app-navbar{
        z-index: 10;
        width: 15%;
        position:fixed;
        color: var(--text-color);
        margin: 1% 2% 0% 2%;
        border-right: 1px solid #dbdbdb;
        height: 100vh;
        background-color: #ffffff;
        border-radius: 10px;
        animation: faded 2s linear;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
    }
    @keyframes faded{
        from {
            opacity: 0;
            transform: translateX(-250px);
        }
        to{
            opacity: 1;
            transform: translateX(0);
        }
    }
    .nav-box-admin{
        margin-top: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #afadad;
    }
    .admin-icon{
        color: #07aa38;
    }
    .nav-box-admin__info-status{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px 20px 25px 0;
    }
    .nav-box-admin__img{
        width: 15%;
        border-radius: 50%;
        margin: 0px 20px 25px 0;
    }
    .nav-box-admin__info-name{
        font-size: 1.6rem;
        font-weight: 600;
    }
    .active{
        display: inline-block;
    }
    .selected {
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        padding: 10px 0;
    }
    .selected-in {
        background-color: #fff;
        border-radius: 6px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        
    }
    .child__content-icon-extend.rotate {
        transform: rotate(-90deg); 
        transition: transform 0.3s ease; 
    }
    .nav-bar{
        margin-top: 10px;
    }
    .nav-bar-list{
        margin-top: 50px;
    }
    .nav-bar-list-child{
        color: #dbdbdb;
        font-size: 1.4rem;
        width: 100%;
        list-style:  none;
        margin-top: 20px;
    }
    .nav-bar-list-child__content-box{
       
        width: 100%;
        display: none;
        justify-content: space-between;
        align-items: center;
    }
    .nav-bar-list-child__content{
        display: flex;
        position: relative;
        justify-content: space-between;
        margin: 10px;
        margin-top: 10px;
        align-items: center;
        text-align: center;
    }
    .nav-list-child-select{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    .child__content-icon-img{
        background-color: #ffffff;
        padding: 5px 5px;
        border-radius: 5px;
        box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.1);
        color: #000000;
    }
    .nav-bar-list-child__logout{
    
        display: flex;
        margin-top: 75%;
        margin-left: 30%;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
    .nav-bar-list-child__content-icon{
        padding: 0 10px;
        font-size: 1.5rem;
        color: #000000;
    }
    .nav-bar-list-child__content-title{
        padding: 0 12px;
        color: #000000;
        text-decoration: none;
    }
    .nav-bar-list-child__content:hover{
        cursor: pointer;
        opacity: 0.8;
    }
    .nav-bar-list-child__icon{
        padding: 0 5px;
        display: flex;
        align-items: center;
        color: #525151;
    }
    .nav-bar-list-child__content-box{
        position: relative;
    }
    .box-select{
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 5px;
    }
    .active{
        display: inline-block ;
    }
    .menu-list{
    padding: 10px 20px;
    list-style: none;
    width: 100%;
    animation:  fadeInTest 0.5s ease forwards;
    }
    .menu-list:hover{
        background-color: #fff;
        border-radius: 10px;
    }
    .menu-list a{
        color: #030303;
        text-decoration: none;
    }
    @keyframes fadeInTest{
        from{
            opacity: 0;
            transform: translateY(-30px);
        }
        to{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .active{
        display: inline !important;
    }
</style>