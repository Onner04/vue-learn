<script setup>
    import '@/assets/grid.css';
    import '@/assets/base.css';
    import Layout from "@/components/backend/Layout.vue";
    import {ref , onMounted , defineProps} from 'vue' ;
    import axios from 'axios';
    import Pagination from '@/components/backend/Pagination.vue'

    const Tools = ref([]) ;
    const items  = ref([]) ;

    const model  = ref('User') ;
    const tableConfig = ref({
        route : {
            update:'product/update',
            delete:'product/delete',
        },
    })

    const table = ref({
        thead: [
           'Name' ,'Image', 'Quantity', 'Price' , 'Sale Price' , 'Category' , 'Status' , 'Action' 
        ],

        base:[
            'name','image','quantity','price','sale_price','category','status','action'
        ],
        data:[ ]
    })
    const paginationData = ref('') ;
    const renderTable = async () => {
        try {
            const response = await axios.get('/admin/product');
            table.value.data = response.data ;
            paginationData.value = response ;
            
        } catch (error) { 
        }
    }
    onMounted(() => {

        renderTable();

        Tools.value = Array.from(document.querySelectorAll('#tool-manager'));
        items.value  = Array.from(document.querySelectorAll('.admin-product-manager-tool__list'));
        Tools.value.forEach((menu, index) => {
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
                    <div class="admin-product-manager">
                        <h2 class="admin-product-title">Product Management</h2>
                        <div class="admin-product-manager-tool" id="tool-manager">
                            <i class="fa-solid fa-gear tool-active"></i>
                            <ul class="admin-product-manager-tool__list" >
                                <li class="admin-product-manager-tool__list-child">
                                    <i class="fa-solid fa-delete-left tool-icon"></i>
                                    <div class="text">Delete All</div>
                                </li>
                                <li class="admin-product-manager-tool__list-child">
                                    <i class="fa-solid fa-hand-point-up tool-icon"></i>
                                    <div class="text">Publish All</div>
                                </li>
                                <li class="admin-product-manager-tool__list-child">
                                    <i class="fa-solid fa-hand-point-up tool-icon"></i>
                                    <div class="text">UnPublish All</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="admin-product-box">
                        <table class="table">
                            <thead>
                                <tr class="table-product">
                                    <th><input type="checkbox" value="" class="btn btn-check"></th>
                                    <th v-for="(title, index) in table.thead" :key="index">{{ title }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(value) in table.data" :key="value.id">
                                    <td><input type="checkbox" value="" class="input-checkbox"></td>
                                    <td v-for="(base , indexBase) in table.base" :key="indexBase"><span class="table-product-name">{{ value[base] }}</span></td>
                                    
                                    <td>
                                        <router-link :to="`${tableConfig.route.update}/${value.id}`">
                                            <a href="" class="table-product-link product-edit">edit</a>
                                        </router-link>
                                        <router-link :to="`${tableConfig.route.delete}/${value.id}`">
                                            <a href="" class="table-product-link product-delete">delete</a>
                                        </router-link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <Pagination :pagination="paginationData"/>
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
        margin-top: 100px;
    }
    .admin-product-manager{
        display: flex;
        justify-content: space-between;
    }
    .admin-product-manager-tool{
        width: 5%;
        position: relative;
    }
    .fa-gear{
        font-size: 1.6rem;
        animation: rotate 2s infinite;
    }
    @keyframes rotate{
        0%{
            -webkit-transform: rotate(0);
            transform: rotate(0);
        }
        100%{
            -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
        }
    }
    .admin-product-manager-tool__list{
        position: absolute;
        top: 20px;
        width: 200%;
        right: 30px;
        background-color: #fff;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        padding: 10px 10px ;
        display: none;
        animation: tools 0.5s linear;
    }
    @keyframes tools{
        from{
            transform: translateY(25px);
            opacity: 0;
        }
        to{
            transform: translateY(0);
            opacity: 1;
        }
    }
    .active{
        display: block !important;
    }
    .admin-product-title{
        font-size: 2rem;
    }
    .admin-product-box{
        background-color: #fff;
        height: 350px;
        box-shadow: 1px 2px 10px 1px rgba(0, 0, 0, 0.1);
        width: 90%;
        margin: 100px auto 0 auto ;
        border-radius: 5px;
    }
    .tool-icon{
        height: 25px;
        line-height: 25px;
        margin: 0 5px;
    }
    .admin-product-manager-tool__list-child{
        display: flex;
        list-style: none;
        height: 25px;
        line-height: 25px;
        font-size: 1.3rem;
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
        text-decoration: none;
    }
    .product-delete{
        color: rgb(255, 0, 0);
        text-decoration: none;
    }

</style>