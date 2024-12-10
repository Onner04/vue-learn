<script setup>
    import '@/assets/grid.css';
    import '@/assets/base.css';
    import Layout from "@/components/backend/Layout.vue";
    import {ref , onMounted} from 'vue' ;
    import axios from 'axios';

    const adminLink = ref(null);
    const childMenu = ref(null);
    const admins = ref([]) ;
    const items  = ref([]) ;

    const table = ref({
        thead: [
            'STT','Tên sản phẩm' ,'ảnh sản phẩm', 'số lượng', 'giá' , 'giá khuyến mãi' , 'thuộc danh mục' , 'trạng thái' , 'hành động' ],
        data:[
            {
                id: 1,
                name: "Áo khoác",
                quantity: 20,
                price: "20$",
                sale_price: "15$",
                category: "Áo",
                status: "Hiển thị",
            },  
        ]
    })


    const renderTable = async () => {
        try {
            const response = await axios.get('/admin/product');
            table.value.data = response.data 
            console.log(response);
        } catch (error) { 
        }
        
    }
    onMounted(() => {

        renderTable();

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
</script>

<template>
    <layout>
        <template #template>
            <div class="container-img"></div>
            <div class="container-wrapper">     
                 <header>
                    <div class="header-left">
                        <h2 class="header-left-home">Trang chủ </h2>
                        <i class="fa-solid fa-chevron-right header-left-icon"></i>
                        <p class="header-left-title">Admin</p>
                        <i class="fa-solid fa-chevron-right header-left-icon"></i>
                        <p class="header-left-title">Sản phẩm</p>
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
                <div class="container-admin-product">
                    <h2 class="admin-product-title">Quản lý sản phẩm </h2>
                    <div class="admin-product-box">
                        <table class="table">
                            <thead>
                                <tr class="table-product">
                                    <th v-for="(title, index) in table.thead" :key="index">{{ title }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in table.data" :key="row.id">
                                    <td>{{ index + 1 }}</td>
                                    <td><span class="table-product-name">{{ row.name }}</span></td>
                                    <td class="table-product-img">
                                        <img src="@/assets/backend/img/shop-login.avif" alt="" class="table-product-img-item">
                                    </td>
                                    <td><span class="table-product-quantity">{{ row.quantity }}</span></td>
                                    <td><span class="table-product-price">{{ row.price || 'N/A' }}</span></td>
                                    <td><span class="table-product-salePrice">{{ row.sale_price || 'N/A' }}</span></td>
                                    <td><span class="table-product-category">{{ row.category || 'N/A' }}</span></td>
                                    <td>
                                        <span class="label" :class="row.status === 'Hiển thị' ? 'label-success' : 'label-danger'">
                                            {{ row.status || 'Ẩn' }}
                                        </span>
                                    </td>
                                    <td>
                                        <a href="" class="table-product-link product-edit">Sửa</a>
                                        <a href="" class="table-product-link product-delete">Xóa</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </template>
    </layout>
</template>

<style scoped>
    .container-img{
        background-image: url(@/assets/backend/img/shop-login.avif) ;
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 200px;
        opacity: 0.7;
        
    }
    .container-wrapper{
        position: absolute;
        margin-top: 20px;
        right: 0;
        width: 80%;
    }
    

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




    /* product */
    .container-admin-product{
        margin-top: 155px;
    }
    .admin-product-title{
        font-size: 2rem;
    }
    .admin-product-box{
        background-color: #fff;
        height: 400px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        width: 90%;
        margin: 20px auto;
        border-radius: 5px;
    }
    .table{
        width: 100%;
        
    }
    .table-product-img{
        width: 10%;
    }
    .table-product-img-item{
        width: 35%;
    }
    th,td{
        align-items: center;
        text-align: center;
        font-size: 1.4rem;
    }
    tr{ 
        height: 30px ;
        line-height: 30px;
    }
    .table-product-link{
        text-decoration: none;
        margin: 0 5px;
    }
    .product-edit{
        color: rgb(31, 45, 245);
    }
    .product-delete{
        color: rgb(255, 0, 0);
    }

</style>