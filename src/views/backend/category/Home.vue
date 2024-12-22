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


</script>
<template>
    <layout>
        <template #template>
            <div class="container-wrapper">
                
            </div>
        </template>
    </layout>
</template>
<style scoped>

</style>