<script setup>
import '@/assests/grid.css';
import '@/assests/base.css';
import Layout from "@/components/backend/Layout.vue";
import {ref, onMounted} from 'vue' ;
import axios from 'axios';

const model = ref('User');
const tableConfig = ref({
    route :{
        update : '/category/update',
        delete :'/category/delete',
    },
    action : [

    ]
})
const table = ref({
    thead : [
        'STT',
        'tên danh mục',
        'tên danh mục con',
        'trạng thái',
        'hành động ',     
    ],
    data:[
        {
            id : 1 ,
            name :"",
            category_child:"",
            status:"",
        }
    ]
})
const renderTable = async () => {
    try {
        const response = await axios.get('/admin/category');
        table.value.data = response.data ;
        console.log(response);
        
    } catch (error) {
        console.log(error);
    }
}
onMounted(() => {
    renderTable() ;
})



</script>
<template>
    <layout>
        <template #template>
            <div class="container-wrapper">
                <div class="container-admin-product">
                    <h2 class="admin-product-title">Quản lý danh mục </h2>
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
                                    <td><span class="table-product-quantity">{{ value.category_child }}</span></td>
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

</style>