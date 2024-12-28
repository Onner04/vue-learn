<script setup>
    import {ref } from 'vue' ;
    const {pagination} = defineProps(['pagination']);

    console.log(pagination);
</script>

<template>
    <div class="pagination">
        <ul class="uk-pagination" >
           

            <li 
                v-for="(link, index) in pagination.links" 
                :key="index" 
                :class="{'uk-active': link.active }">

                <i v-if="link.label === 'pagination.previous'" class="fa-solid fa-chevron-left"></i>
                <i v-else-if="link.label === 'pagination.next'" class="fa-solid fa-chevron-right"></i>
                <span v-else>{{ link.label }}</span>
            </li>

            
        </ul>
    </div>
</template>
<style scoped>
    .pagination{
        margin: 0 auto;
        text-align: center;
    }
    .uk-pagination{
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 20px;
    }
    .uk-pagination li {
        list-style: none;
        margin: 0 5px ;
    }
    .uk-pagination li a {
        text-decoration: none;
        color: #000;
        font-size: 1.4rem;
    }
    .uk-active span {
        cursor: pointer;
    }
</style>