<script setup>
    import '@/assets/grid.css';
    import '@/assets/base.css';
    import Layout from "@/components/backend/Layout.vue";
    import {ref , onMounted} from 'vue' ;
    import axios from 'axios';


    
    
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
               
                <div class="container-admin">
                    <div class="container-statis">
                        <div class="grid wide ">
                            <div class="row">
                                <div class="col l-3 m-6 c-6  container-statis-info">
                                    <div class="container-statis-box">
                                        <div class="container-statis-box__child">
                                            <p class="container-statis-box__child-content">View</p>
                                            <div class="container-statis-box__child-parameter">
                                                <p class="container-statis-box__child-number">25</p>
                                                <span class="container-statis-box__child-compare">
                                                    <i class="fa-solid fa-arrow-up "> </i> 3.4%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="container-statis-box__icon" style="background-color:red ;">
                                            <i class="fa-solid fa-eye container-statis-box__icon-item"  style="color:#fff"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col l-3 m-6 c-6  container-statis-info">
                                    <div class="container-statis-box">
                                        <div class="container-statis-box__child">      
                                            <p class="container-statis-box__child-content">New Users </p>
                                            <div class="container-statis-box__child-parameter">
                                                <p class="container-statis-box__child-number">25</p>
                                                <!-- <span class="container-statis-box__child-compare">
                                                    <i class="fa-solid fa-arrow-up " > </i> 3.4%
                                                </span> -->
                                                <span class="container-statis-box__child-compare-down">
                                                    <i class="fa-solid fa-arrow-down " > </i> 3.4%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="container-statis-box__icon" style="background-image: linear-gradient(310deg, #fb6340, #fbb140);">
                                            <i class="fa-solid fa-user container-statis-box__icon-item" style="color:#fff"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col l-3 m-6 c-6  container-statis-info">
                                    <div class="container-statis-box">
                                        <div class="container-statis-box__child">
                                            <p class="container-statis-box__child-content">Income/month</p>
                                            <div class="container-statis-box__child-parameter">
                                                <p class="container-statis-box__child-number">25</p>
                                                <span class="container-statis-box__child-compare">
                                                    <i class="fa-solid fa-arrow-up "> </i> 2.8%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="container-statis-box__icon" style=" background-image: linear-gradient(195deg, #49a3f1 0%, #1A73E8 100%);">
                                            <i class="fa-solid fa-money-bill container-statis-box__icon-item" style="color:#fff ;"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="col l-3 m-6 c-6  container-statis-info">
                                    <div class="container-statis-box">
                                        <div class="container-statis-box__child">
                                        
                                            <p class="container-statis-box__child-content">Order</p>
                                            <div class="container-statis-box__child-parameter">
                                                <p class="container-statis-box__child-number">25</p>
                                                <span class="container-statis-box__child-compare">
                                                    <i class="fa-solid fa-arrow-up "> </i> 6.1%
                                                </span>
                                            </div>
                                        </div>
                                        <div class="container-statis-box__icon" style="background-image: linear-gradient(310deg, #2dce89, #2dcecc)">
                                            <i class="fa-solid fa-cart-shopping container-statis-box__icon-item" style="color:#fff"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="container-pay">
                            <h2 class="container-pay-title">Revenue Management</h2>
                            <div class="container-pay-balance">
                                <div class="container-pay-balance-box-select">
                                    <div class="container-pay-card">
                                        <div class="container-pay-card-cover"></div>
                                        <div class="container-pay-card-account">
                                            <span class="container-pay-card-account-content">4572 1122 3697 7852</span>
                                        </div>
                                        <div class="container-pay-card-info">
                                            <div class="container-pay-card-info-user">
                                                <h3 class="container-pay-card-info-user__item">Card Holder</h3>
                                                <span class="container-pay-card-info-user__name">DAO THANH</span>
                                            </div>
                                            <div class="container-pay-card-info-date">
                                                <h3 class="container-pay-card-info-date__item">Expries</h3>
                                                <span class="container-pay-card-info-date__name">12/12</span>
                                            </div>
                                            <img src="@/assets/backend/img/mastercard.webp" alt="" class="container-pay-card-info-img">
                                        </div>
                                    </div>
                                    
                                    <div class="container-pay-bank">
                                        <div class="container-pay-bank__icon">
                                            <i class="fa-solid fa-wallet pay-bank__icon"></i>
                                        </div>
                                        <h3 class="container-pay-bank__title">Account balance :</h3>
                                        <span class="container-pay-bank__number">250$</span>
                                        <div style="border-bottom:1px solid #cccaca ; margin-top:15px"></div>
                                        <div class="container-pay-bank__select">
                                            <a href="#" class="container-pay-bank__select-deposit">Deposit money</a>
                                            <a href="#" class="container-pay-bank__select-withdraw">Withdraw money</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="container-pay-method">
                                    <h2 class="pay-method-name">Bank account</h2>
                                    <a href="" class="pay-method-add"> + Add new bank  </a>
                                </div>
                                <div class="grid wide  pay-box">
                                    <div class="row" style="display : flex ; justify-content:space-between ;">
                                        <div class="col l-4 m-12 c-12  container-pay-item">
                                            <div class="container-pay-item-left">
                                                <img src="@/assets/backend/img/visa.webp" alt="" class="container-pay-item-img">
                                                <span class="container-pay-item-content">**** **** **** 7852</span>
                                            </div>
                                            <a href="#" class="container-pay-item__edit">
                                                <i class="fa-solid fa-pen"></i>
                                            </a>
                                        </div>
                                        <div class="col l-4 m-12 c-12  container-pay-item">
                                            <div class="container-pay-item-left">
                                                <img src="@/assets/backend/img/mastercard.webp" alt="" class="container-pay-item-img">
                                                <span class="container-pay-item-content">**** **** **** 7852</span>
                                            </div>
                                            <a href="#" class="container-pay-item__edit">
                                                <i class="fa-solid fa-pen"></i>
                                            </a>
                                        </div>
                                       
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="container-center">

                            <!-- <div class="container-chart" style="padding:-40px 15px ; height : 380px; margin-top:40px ;">
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
                            </div> -->

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


    /* container  */
    .container-admin{
        margin-top: 80px;
    }
   
    .container-statis-box{
        background-color: #fff;
        width: 85%;
        height: 80px;
        border-radius: 5px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);

    }
    .container-statis-box__child-parameter{
        display: flex;
        
    }
    .container-statis-box__child-compare{
        padding: 25px 0 0 5px ;
        color: #06a837;
    }
    .container-statis-box__child-compare-down{
        padding: 25px 0 0 5px ;
        color: #f50b0b;
    }
    .container-statis-box__child-number{
        font-size: 3rem;
        margin: 15px 0;
        font-weight: 700;
    }
    .container-statis-box__child-content{
        font-size: 1.4rem;
        font-weight: 700;
        color: #757575;
    }
    .container-statis-box__icon{
        padding: 10px 10px ;
        border-radius: 50%;
    }
    .container-statis-box__icon-item{
        font-size: 2rem;
    }

    .container-center{
        display: flex;
        justify-content: space-between;
    }



    /* pay */
    .container-pay-title{
        padding: 2% 2% 0 2%;
        font-size: 2rem;
    }
    .container-pay{
        margin-top: 30px;
        width: 95%;
        background-color: #ffffff;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        animation: payBox 1s linear;
    }
    @keyframes payBox {
        from{
            opacity: 0;
            transform: translateY(50px);
        }to{
            opacity: 1;
            transform: translateY(0);
        }
    }
    .container-pay-card{
        background-image: url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/card-visa.jpg);
        height: 200px;
        margin: 2% 2%;
        border-radius: 10px;
        color: #fff;
        width: 37%;
        position: relative;
    }
    .container-pay-card-cover{
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .container-pay-card-account{
        position: absolute;
        height: 150px;
        line-height: 150px;
        margin: 0 20px;
        z-index: 10;
    }
    .container-pay-card-account-content{
        font-size: 2rem;
        font-weight: 600;
        z-index: 10;
    }
    .container-pay-card-info{
        position: absolute;
        top: 150px;
        display: flex;
        justify-content: space-between;
        margin: 0 20px;
    }
    .container-pay-card-info-date{
        margin-right: 50%;
    }
    .container-pay-card-info-img{
        width: 10%;
    }
    
    .container-pay-balance-box-select{
        display: flex;
    }
    
    .container-pay-bank{
        width: 20%;
        height: 200px;
        margin-top: 25px;
        border-radius: 10px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        text-align: center;
        background-color: #fafafa;
    }
    .container-pay-bank__icon{
        padding: 10px 10px;
        background-image: linear-gradient(310deg, #fb6340, #f56036);
        width: 20%;
        margin: 20px auto;
        border-radius: 5px;

    }
    .pay-bank__icon{
        color: #fff;
        font-size: 2.5rem;
    }
    .container-pay-bank__title{
        font-size: 1.5rem;
        margin: 10px 0;
    }
    .container-pay-bank__number{
        font-size: 1.4rem;
        font-weight: 700;
    }
    .container-pay-bank__select{
        margin-top: 20px;
    }
    .container-pay-bank__select-deposit{
        margin: 0 3% ;
        text-decoration: none;
        color: #fff;
        background-color: #0e8f35;
        padding: 5px 10px;
        border-radius: 5px;
        font-weight: 600;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
    }
    .container-pay-bank__select-withdraw{ 
        text-decoration: none;
        color: #fff;
        background-color: #fa3d24;
        padding: 5px 10px;
        font-weight: 600;
        border-radius: 5px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
    }
    .container-pay-balance-select,
    .container-pay-method,
    .container-pay-item{
        display: flex;
    }
    .container-pay-method{
        display: flex;
        justify-content: space-between;
    }
    .pay-method-name{
        padding: 5px 2% ;
        font-size: 1.8rem;
    }
    .pay-method-add{
        text-decoration: none;
        background-image: linear-gradient(310deg, #212229, #212529);
        color: #fff;
        height: 30px ;
        line-height: 30px;
        margin: 0 30px;
        padding: 0 25px;
        border-radius: 3px ;
        font-weight: 600;
         box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
    }
    .pay-box{
        width: 100%;
    }
    .container-pay-item{
        border: 1px solid #f1f1f1;
        margin: 20px 5%;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        
    }
    .container-pay-item__edit{
        font-size: 1.4rem;
        color: #000;
    }
    .container-pay-item-img{
        width: 9%;
    }
    .container-pay-item-left{
        display: flex;
        height: 60px;
        line-height: 60px;
        width: 95%;
    }
    .container-pay-item__edit{
        height: 60px ;
        line-height: 60px;
    }
    .container-pay-item-content{
        margin: 0 15px ;
        font-size: 1.4rem;
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
        left: 5%;
        font-size: 1.7rem;
        color: #757575;
    }
    .slide-admin-up{
        position: absolute;
        top: 50%;
        right: 7.5%;
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
    .container-chart{
        background-color: #fff;
    }

</style>