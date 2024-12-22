<script setup>
    import '@/assets/grid.css';
    import '@/assets/base.css';
    import Layout from "@/components/backend/Layout.vue";
    import { ref, onMounted } from 'vue';
    import axios from 'axios';
    import { useStore } from 'vuex';
    import { BACKEND_API } from '@/config/constant.js';
    import handleFormError from '@/helpers/helper.js';
    import FormDelete from '@/components/backend/FormDelete.vue';
    import { useRouter } from 'vue-router';
    import csrf from '@/config/csrf';

 
    const endpoint = ref('product/delete');

    const router = useRouter();

    const product = ref({});


    const getProduct = async () => {
        const id = router.currentRoute.value.params.id; 
        try {
            await csrf.getCookie();

            const response = await axios.get(`admin/product/${id}`);

            console.log(response);
        } catch (error) {
            console.error('Lỗi khi lấy sản phẩm:', error);
        }
    };

    onMounted(() => {
        getProduct();
    });
</script>


<template>
    <layout>
        <template #template>
            <FormDelete :enpoint="endpoint" />
        </template>
    </layout>
</template>
<style scoped>

</style>