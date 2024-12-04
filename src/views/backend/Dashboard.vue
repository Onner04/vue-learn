<script setup>
    import '@/assets/grid.css';
    import '@/assets/base.css';
    import Layout from "@/components/backend/Layout.vue";
    import {ref , onMounted} from 'vue' ;
    import axios from 'axios';


    // let token = ''
    // const getToken = async () => {
    //     try {
    //         const token = await axios.get('/csrf-cookie')
    //     } catch (error) {
    //         console.log(error);
            
    //     }
    // }
    // getToken()
    // console.log(token);
    





    const adminLink = ref(null);
    const childMenu = ref(null);
    const admins = ref([]) ;
    const items  = ref([]) ;
    onMounted(() => {
        admins.value = Array.from(document.querySelectorAll('.header-right-admin'));
        items.value  = Array.from(document.querySelectorAll('.header-right-admin-list'));
        admins.value.forEach((menu, index) => {
            menu.addEventListener('click', () => {
                items.value.forEach((item, i) => {
                    if (i === index) {
                        item.classList.toggle('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            });
        });
    });
   

    const currentSlide = ref(0); 
    const widthSlide = ref(0); 
    const totalSlides = 3; 
    let intervalId = null;

    onMounted(() => {
    widthSlide.value = document.querySelector('.slide-admin').clientWidth;
    startInterval();
    });

    const startInterval = () => {
    intervalId = setInterval(() => {
        nextSlide();
    }, 3000);
    };
    
    const stopInterval = () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
    };

    const nextSlide = () => {
    if (currentSlide.value < totalSlides - 1) {
        currentSlide.value++;
    } else {
        currentSlide.value = 0; 
    }
    };
  
    const prevSlide = () => {
    if (currentSlide.value > 0) {
        currentSlide.value--;
    } else {
        currentSlide.value = totalSlides - 1; 
    }
    };
    
    const handleSlideUpClick = () => {
    nextSlide();
    stopInterval();
    startInterval();
    };

    const handleSlideBackClick = () => {
    prevSlide();
    stopInterval();
    startInterval();
    };
  
</script>

<template>
    <layout>
        <template #template>
            <div class="container-wrapper">
                <header>
                    <div class="header-left">
                        <h2 class="header-left-home">Trang chủ </h2>
                        <i class="fa-solid fa-chevron-right header-left-icon"></i>
                        <p class="header-left-title">Admin</p>
                    </div>

                    <div class="header-right">
                        <div class="header-right-search">
                            <input type="text" class="header-right-search-input" placeholder="Tìm kiếm ....">
                            <i class="fa-solid fa-magnifying-glass header-right-icon"></i>
                        </div>

                        <div class="header-right-admin">
                            <img src="@/assets/backend/img/admin.jpg" alt="" class="header-right-admin-img">

                            <ul class="header-right-admin-list">
                                <li class="header-right-admin-list__child">
                                    <a href="#" class="header-right-admin-list__child-link">
                                        <i class="fa-solid fa-user header-right-admin-icon"></i>
                                        <p class="header-right-admin-list__child-link-item">Thông tin cá nhân </p>
                                    </a>
                                </li>
                        
                                <li class="header-right-admin-list__child">
                                    <a href="#" class="header-right-admin-list__child-link">
                                        <i class="fa-solid fa-right-from-bracket header-right-admin-icon"></i>                        
                                         <p class="header-right-admin-list__child-link-item">Đăng xuất </p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="header-right-bell">
                            <i class="fa-solid fa-bell header-right-bell-icon"></i>
                        </div>
                    </div>
                </header>

                <div class="container-admin">
                    <div class="container-statis">
                        <div class="grid wide ">
                            <div class="row">
                                <div class="col l-3 m-6 c-6  container-statis-info">
                                    <div class="container-statis-box">
                                        <div class="container-statis-box__child">
                                            <p class="container-statis-box__child-number">25</p>
                                            <p class="container-statis-box__child-content">truy cập</p>
                                        </div>
                                        <div class="container-statis-box__icon">
                                            <i class="fa-solid fa-cart-shopping container-statis-box__icon-item"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col l-3 m-6 c-6  container-statis-info">
                                    <div class="container-statis-box">
                                        <div class="container-statis-box__child">
                                            <p class="container-statis-box__child-number">45</p>
                                            <p class="container-statis-box__child-content">Lượt xem</p>
                                        </div>
                                        <div class="container-statis-box__icon">
                                            <i class="fa-solid fa-cart-shopping container-statis-box__icon-item"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col l-3 m-6 c-6  container-statis-info">
                                    <div class="container-statis-box">
                                        <div class="container-statis-box__child">
                                            <p class="container-statis-box__child-number">25$</p>
                                            <p class="container-statis-box__child-content">Thu nhập/tháng</p>
                                        </div>
                                        <div class="container-statis-box__icon">
                                            <i class="fa-solid fa-cart-shopping container-statis-box__icon-item"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col l-3 m-6 c-6  container-statis-info">
                                    <div class="container-statis-box">
                                        <div class="container-statis-box__child">
                                            <p class="container-statis-box__child-number">25</p>
                                            <p class="container-statis-box__child-content">Đơn hàng </p>
                                        </div>
                                        <div class="container-statis-box__icon">
                                            <i class="fa-solid fa-cart-shopping container-statis-box__icon-item"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container-center">

                            <div class="container-chart" style="padding:-40px 15px ; height : 375px; margin-top:40px ;">
                                <svg width="600" height="400">
                                
                                    <defs>
                                        <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" style="stop-color:rgba(190, 94, 4, 0.1);" />
                                            <stop offset="100%" style="stop-color:rgba(121, 207, 247, 0);" />
                                        </linearGradient>
                                        <linearGradient id="gradientOrange" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" style="stop-color:rgba(241, 69, 30, 0.1);" />
                                            <stop offset="100%" style="stop-color:rgba(255, 255, 255, 0);" />
                                        </linearGradient>
                                        <linearGradient id="gradientGreen" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" style="stop-color:rgba(5, 131, 47, 0.1);" />
                                            <stop offset="100%" style="stop-color:rgba(255, 255, 255, 0);" />
                                        </linearGradient>
                                    </defs>
                        
                                    
                                    <text x="30" y="350" fill="#000" font-size="12px">0</text>
                                    <text x="30" y="300" fill="#000" font-size="12px">50</text>
                                    <text x="30" y="250" fill="#000" font-size="12px">100</text>
                                    <text x="30" y="200" fill="#000" font-size="12px">150</text>
                                    <text x="30" y="150" fill="#000" font-size="12px">200</text>
                                    <text x="30" y="100" fill="#000" font-size="12px">250</text>
                                    <text x="30" y="100" fill="#000" font-size="12px">300</text>
                        
                                    
                                    <text x="50" y="370" fill="#000" font-size="12px">Jan</text>
                                    <text x="100" y="370" fill="#000" font-size="12px">Feb</text>
                                    <text x="150" y="370" fill="#000" font-size="12px">Mar</text>
                                    <text x="200" y="370" fill="#000" font-size="12px">Apr</text>
                                    <text x="250" y="370" fill="#000" font-size="12px">May</text>
                                    <text x="300" y="370" fill="#000" font-size="12px">Jun</text>
                                    <text x="350" y="370" fill="#000" font-size="12px">Jul</text>
                                    <text x="400" y="370" fill="#000" font-size="12px">Aug</text>
                                    <text x="450" y="370" fill="#000" font-size="12px">Sep</text>
                                    <text x="500" y="370" fill="#000" font-size="12px">Oct</text>
                                    <text x="550" y="370" fill="#000" font-size="12px">Nov</text>
                                    <text x="600" y="370" fill="#000" font-size="12px">Dec</text>
                        
                                    
                                    <path d="M50,300 C150,150 250,450 350,250 C450,50 550,350 600,200 L600,350 L50,350 " 
                                        fill="url(#gradientBlue)" stroke="#cc6101" stroke-width="3"/>
                                    
                                    
                                    <path d="M50,350 C150,250 250,300 350,200 C450,100 550,250 600,150 L600,350 L50,350 " 
                                        fill="url(#gradientOrange)" stroke="#ff0080" stroke-width="3"/>
                                    
                                    
                                    <path d="M50,320 C150,180 250,380 350,230 C450,80 550,280 600,100 L600,350 L50,350 " 
                                        fill="url(#gradientGreen)" stroke="#515050" stroke-width="3"/>
                                </svg>
                            </div>

                            <div class="container-slide-admin">
                                <div class="slide-admin">
                                    <div class="slide-admin-move" >
                                         
                                        <div class="slide-admin-move__item" :class="{ active: currentSlide === 0 }">
                                        <a href="#" class="slide-admin-move__item-link">
                                            <img src="@/assets/backend/img/shop-login.avif" alt="Slide 1" class="slide-admin-move__item-img" />
                                        </a>
                                        </div>
                                            
                                        <div class="slide-admin-move__item" :class="{ active: currentSlide === 1 }">
                                        <a href="#" class="slide-admin-move__item-link">
                                            <img src="@/assets/backend/img/img-login.avif" alt="Slide 2" class="slide-admin-move__item-img" />
                                        </a>
                                        </div>
                                            
                                        <div class="slide-admin-move__item" :class="{ active: currentSlide === 2 }">
                                        <a href="#" class="slide-admin-move__item-link">
                                            <img src="@/assets/backend/img/shop-login.avif" alt="Slide 3" class="slide-admin-move__item-img" />
                                        </a>
                                        </div>
                                    </div>
                                       
                                    <div class="slide-admin-next">                                           
                                        <span class="slide-admin-back" @click="handleSlideBackClick">
                                            <i class="fa-solid fa-chevron-left"></i>
                                        </span>
                                            
                                        <span class="slide-admin-up" @click="handleSlideUpClick">
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                             
                               
                               
                        </div>



                    </div>
                </div>

            </div>
        </template>
    </layout>
</template>

<style scoped>
    .container-wrapper{
        position: absolute;
        margin-top: 20px;
        right: 0;
        width: 80%;
    }
    header{
        display: flex;
        justify-content: space-between;
        margin: 0 3%;
    }
    .header-left-icon{
        line-height: 30px;
        padding: 0 5px ;
    }
    .header-left{
        display: flex;
        height: 30px;
        line-height: 30px;
        color: #fff;
        font-size: 1.4rem;
    }
    .header-right{
        display: flex;
        justify-content: space-between;
        width: 35%;
    }
    .header-right-search{
        margin: 5px 20px;
        position: relative;
    }
    .header-right-icon{
        position: absolute;
        right: 10px;
        top: 7px;
        font-size: 1.4rem;
    }
    .header-right-search-input{
        height: 30px;
        border-radius: 20px;
        padding: 0 20px;
        border: none;
    }
    .header-right-admin{
        width: 10%;
        position: relative;
    }
    .header-right-admin-img{
        width: 80%;
        border-radius: 50%;
        margin: 0 5px ;
    }
    .header-right-admin-img:hover{
        cursor: pointer;
    }
    .header-right-admin-list{
        display: none;
        background-color: #fff;
        width: 355%;
        position: absolute;
        right: -30px;
        top: 50px;
        border-radius: 5px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        animation: faded 1s ease;
    }
    .header-right-admin-list__child{
        list-style: none;
    }
    .header-right-admin-list__child:hover{
        background-color: #eeeded;
        border-radius: 5px;
    }
    .header-right-admin-icon{
        line-height: 40px;
        padding: 0 5px;
        font-size: 1.4rem; 
    }
    .header-right-admin-list__child-link{
        display: flex;
        justify-content: center;
        height: 40px;
        line-height: 40px;
        text-decoration: none;
        color: #000;
    }
    .header-right-admin-list__child-link-item{
        font-size: 1.3rem;
    }
    @keyframes faded{
        from{
            opacity: 0;
            transform: translateY(25px);
        }to{
            opacity: 1;
            transform: translateY(0px);
        }
    }
    .header-right-bell{
        margin-top: 6px;
        width: 10%;
        margin-right: 20px;
    }
    .header-right-bell-icon{
        font-size: 2.8rem;
        color: #fff;
    }
    .active{
        display: inline;
    }

    .container-chart{
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

    }



    /* container  */
    .container-admin{
        margin-top: 40px;
    }
   
    .container-statis-box{
        background-color: #fff;
        width: 80%;
        height: 80px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);

    }
    .container-statis-box__child-number{
        font-size: 3.5rem;
        margin: 15px 0;
        font-weight: 700;
    }
    .container-statis-box__child-content{
        font-size: 1.5rem;
    }
    .container-statis-box__icon-item{
        font-size: 3.5rem;
    }

    .container-center{
        display: flex;
        justify-content: space-between;
    }


    /* slide */
    .container-slide-admin{
        width: 50%;
    }
    .slide-admin{
        width: 100%;
        overflow: hidden;
        position: relative;  
        height: 415px;
        
    }
    .slide-admin-move{
        margin-top: 25px;
        position: relative;
        top: 10px;
        right: 10px;
        width: 100%;
        display: flex;
        transition: transform 0.5s ease-in-out;
        height: 415px;
        
    }
    
    .slide-admin-move__item{    
        display: none;
        background-color: #ffffff;
        width: 100%;
        margin: 0 5%;
        border-radius: 10px;
        padding: 20px 20px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        height: 405px;
        
        

    }
    @keyframes SliderTT {
        from{
            transform: translateX(-50vw);
            
        }
        to{
            transform: translateX(0vw);
            
        }
    }

    @keyframes Slider {
        from{
            transform: translateX(50vw);
        }
        to{
            transform: translateX(0vw);
            
        }
    }
    

    .slide-admin-move__item.active{
        display: block;

    }
    

    .slide-admin-back{
        position: absolute;
        top: 50%;
        left: 5%px;
        font-size: 1.7rem;
        color: #757575;
    }
    .slide-admin-up{
        position: absolute;
        top: 50%;
        right: 4.5%;
        font-size: 1.7rem;
        color: #757575;
    }

    .slide-move__item-img{
        float: left;
        width: 100%;
        
    }

    @keyframes SliderTT {
        from{
            transform: translateX(-50vw);
            
        }
        to{
            transform: translateX(0vw);
            
        }
    }

    @keyframes Slider {
        from{
            transform: translateX(50vw);
        }
        to{
            transform: translateX(0vw);
            
        }
    }
    .slide-admin-move__item-img{
        width: 100%; 
        border-radius: 10px; 
         object-fit: cover;
         height: 350px; 
    }

</style>