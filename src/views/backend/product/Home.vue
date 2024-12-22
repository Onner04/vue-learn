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

    const model  = ref('User') ;
    const tableConfig = ref({
        route : {
            update:'product/update',
            delete:'product/delete',
        },
        action : [

        ]
    })
   

    const table = ref({
        thead: [
            'STT','Tên sản phẩm' ,'ảnh sản phẩm', 'số lượng', 'giá' , 'giá khuyến mãi' , 'thuộc danh mục' , 'trạng thái' , 'hành động' ],
        data:[
            {
                id: 1,
                name: "",
                quantity: 20,
                price: "",
                sale_price: "",
                category: "",
                status: "Hiển thị",
            },  
        ]
    })
    const renderTable = async () => {
        try {
            const response = await axios.get('/admin/product');
            table.value.data = response.data ;
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
                                <tr v-for="(value, index) in table.data" :key="value.id">
                                    <td>{{ index + 1 }}</td>
                                    <td><span class="table-product-name">{{ value.name }}</span></td>
                                    <td class="table-product-img">
                                        <img src="@/assets/backend/img/shop-login.avif" alt="" class="table-product-img-item">
                                    </td>
                                    <td><span class="table-product-quantity">{{ value.quantity }}</span></td>
                                    <td><span class="table-product-price">{{ value.price || 'N/A' }}</span></td>
                                    <td><span class="table-product-salePrice">{{ value.sale_price || 'N/A' }}</span></td>
                                    <td><span class="table-product-category">{{ value.category || 'N/A' }}</span></td>
                                    <td>
                                        <span class="label" :class="value.status === 'Hiển thị' ? 'label-success' : 'label-danger'">
                                            {{ value.status || 'Ẩn' }}
                                        </span>
                                    </td>
                                    <td>
                                        <router-link :to="`${tableConfig.route.update}/${value.id}`">
                                            <a href="" class="table-product-link product-edit">Sửa</a>
                                        </router-link>
                                        <router-link :to="`${tableConfig.route.delete}/${value.id}`">
                                            <a href="" class="table-product-link product-delete">Xóa</a>
                                        </router-link>
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