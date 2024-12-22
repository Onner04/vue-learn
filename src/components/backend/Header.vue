<script>
export default {
    setup() {
        
    },
}
</script>
<template>
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

                            <ul class="header-right-noti">
                                <li class="header-right-noti-list  noti-list-title">
                                    <div class="header-right-noti-list-item">
                                        <a href="#" class="header-right-noti-list-item-link">
                                            
                                            <p class="header-right-noti-customer noti-title-content">Thông báo</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="header-right-noti-list">
                                    <div class="header-right-noti-list-item">
                                        <a href="#" class="header-right-noti-list-item-link">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            <p class="header-right-noti-customer">đào thành đã đặt 1 đơn hàng</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="header-right-noti-list">
                                    <div class="header-right-noti-list-item">
                                        <a href="#" class="header-right-noti-list-item-link">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            <p class="header-right-noti-customer">đào thành đã đặt 1 đơn hàng</p>
                                        </a>
                                    </div>
                                </li>
                                <li class="header-right-noti-list">
                                    <div class="header-right-noti-list-item">
                                        <a href="#" class="header-right-noti-list-item-link">
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            <p class="header-right-noti-customer">đào thành đã đặt 1 đơn hàng</p>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
    
</template>
<style scoped>
    header{
        position: absolute;
        top: 20px;
        right: 0;
        width: 80%;
        display: flex;
        justify-content: space-between;
        z-index: 10;
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
        display: inline !important;
    }

    .container-chart{
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        border-radius: 10px;

    }


    .header-right-bell{
        position: relative;
    }
    .header-right-noti{
        position: absolute;
        top: 40px;
        right: 0;
        width: 650%;
        background-color: #fff;
        border-radius: 3px;
        overflow: hidden;
        display: none;
        animation: faded 0.5s linear;
                box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);

    }
    .noti-list-title{
        border-bottom: 1px solid #757575;
        
    }
    .noti-list-title:hover{
        background-color: #fff !important;
    }
    .noti-title-content{
        color: #ec2626;
        font-weight: 700;
        font-size: 1.6rem;
    }
    .header-right-noti-list{
        height: 40px ;
        line-height: 40px;
        list-style: none;
    }
    .header-right-noti-list:hover{
        background-color: #e0e0e0;
    }
    .header-right-noti-list-item-link{
        display: flex ;
        align-items: center;
        font-size: 1.4rem;
        text-decoration: none;
        color: #000;
        padding: 0 10px;
    }
    .header-right-noti-customer{
        padding: 0 5px;
    }
</style>