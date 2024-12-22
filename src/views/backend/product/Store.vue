<script setup>
     import '@/assets/grid.css';
    import '@/assets/base.css';
    import Layout from "@/components/backend/Layout.vue";
    import {ref , onMounted} from 'vue' ;
    import axios from 'axios';
    import {useStore} from 'vuex'
    import { BACKEND_API } from '@/config/constant.js'
    import handleFormError from '@/helpers/helper.js'

    const router = useRouter();
    const store = useStore();
    import csrf from '@/config/csrf';
    import { useRouter } from 'vue-router';

    const formData = ref({
        name : '' , 
        quantity : '',
        price: '',
        sale_price:'',

    })
    const formErrorMessage = ref({})
    const create = async () => {
        try {
            await csrf.getCookie()
            const response = await axios.post(BACKEND_API + 'admin/product/Store',formData.value)
            router.push({name : 'product.home'})
        } catch (error) {
            handleFormError(error, formErrorMessage)   
        }
    }  
</script>

<template>
    <layout>
        <template #template>
            <div class="container-wrapper">     

                <div class="body-add">
                        <section class="body-add-content">
                            <h2>Quản lý sản phẩm</h2>
                        </section>
                        <div class="body-add-box" style="height:700px ; overflow-y: auto; "  >
                            <div class="body-add-box-content">
                                <h3 class="box-content-title">Thêm mới sản phẩm</h3>
                            </div>
                            <form  @submit.prevent="create">
                                    <div class="body-box-add-select">
                                        <p  class="box-add-select-title">Tên sản phẩm</p>
                                        <input 
                                            type="text" 
                                            v-model="formData.name" 
                                            name="name"  
                                            placeholder="Nhập tên sản phẩm" 
                                            class="box-add-select-input"
                                        >
                                         <div v-if="formErrorMessage.name" class="form-error" style="color:red ; font-style:italic ;">
                                            {{formErrorMessage.name}}
                                        </div>    
                                    </div>
                                    <div class="body-box-add-select">
                                        <p class="box-add-select-title">số lượng sản phẩm</p>
                                        <input 
                                            type="text" 
                                            v-model="formData.quantity" 
                                            name="quantity"  
                                            placeholder="Nhập số lượng" 
                                            class="box-add-select-input"
                                        >
                                        <div v-if="formErrorMessage.quantity" class="form-error" style="color:red ;font-style:italic ;">
                                            {{formErrorMessage.quantity}}
                                        </div>   
                                    </div>
                                    <div class="body-box-add-select">
                                        <p  class="box-add-select-title">giá sản phẩm</p>
                                        <input 
                                            type="text" 
                                            v-model="formData.price" 
                                            name="price"   
                                            placeholder="Nhập giá sản phẩm" 
                                            class="box-add-select-input"
                                        >
                                        <div v-if="formErrorMessage.price" class="form-error" style="color:red ;font-style:italic ;">
                                            {{formErrorMessage.price}}
                                        </div>
                                    </div>
                                    <div class="body-box-add-select">
                                        <p  class="box-add-select-title">giá sale</p>
                                        <input 
                                            type="text" 
                                            v-model="formData.sale_price" 
                                            name="sale_price"   
                                            placeholder="Nhập giá sale" 
                                            class="box-add-select-input"
                                        >
                                        <div v-if="formErrorMessage.sale_price" class="form-error" style="color:red ;font-style:italic ;">
                                            {{formErrorMessage.sale_price}}
                                        </div>
                                    </div>
                                    <!-- <div class="body-box-add-select">
                                        <label style="font-size:15px ;" for="">Danh mục sản phẩm</label>
                                        <select class="form-control" name="category_id">       
                                            <option value=""></option>                                                   
                                        </select>
                                    </div>
                                    <div class="checkbox">
                                        <span>chiều cao : </span>
                                        <label >
                                            <input value="" name="attr[]" type="checkbox">
                                        </label>                 
                                    </div>       
                                    <div class="form-group">
                                        <label for="file-upload">Ảnh sản phẩm</label>
                                        <div class="imageFile" style="height:120px;width:100%;">
                                        <label for="file-upload" class="custom-file-upload">
                                            <img src="" id="image" style="height:100%;border-radius:5px;" alt="">
                                        </label>
                                        </div>
                                        <label for="file-upload" style="margin-top:4px" class="custom-file">
                                            <i class="fa fa-cloud-upload"></i>
                                            Chọn ảnh
                                        </label>
                                        <input id="file-upload" type="file" name="file" class="form-control dn @error('image') is-invalid @enderror">                                        
                                    </div>
                                    <div class="form-group">
                                        <label for="files">Ảnh mô tả</label>
                                        <label for="files" style="display:block;height:120px">
                                            <div class="image-preview" style="background-image:url('{{ url('assest') }}/img/upfile.JPG')"></div>
                                        </label>
                                        <label for="files" class="custom-file">
                                            <i class="fa fa-cloud-upload"></i>
                                            Chọn ảnh
                                        </label>
                                        <input id="files" type="file" multiple name="files[]" class="dn form-control @error('files') is-invalid @enderror">                                      
                                    </div> 
                                    <div class="form-group">
                                        <label for="content">Mô tả</label>
                                        <textarea  name="description" id="content" ></textarea>                    
                                    </div> 
                                    <div class="form-group">
                                        <label for="input">Chọn trạng thái</label>
                                        <div class="radio">
                                        <label>
                                            <input type="radio" name="status" id="input" value="1" checked="checked">
                                            Hiện
                                        </label>
                                        <label>
                                            <input type="radio" name="status" id="input" value="0">
                                            Ẩn
                                        </label>
                                        </div>
                                    </div> -->
                                    <div class="box-footer">
                                        <button type="submit" class="btn ">Thêm mới</button>
                                    </div>
                            </form>
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

    /* product */
    .body-add{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
}
.body-add-content{
    width: 90%;
    font-size: 1.5rem;
    padding: 20px 0;
    
}
.body-add-box{
    width: 90%;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 10px 10px 10px 4px rgba(0, 0, 0, 0.05);
}
.body-add-box::-webkit-scrollbar{
    width: auto;
}
.body-add-box-content{
    margin:15px 10px;


}
.box-content-title{
    font-size: 2rem;
}
.upload,
.checkbox,
.body-box-add-select{
    width: 100%;
    margin: 15px 10px;
}
.body-box-add-select input {
    border: 1px solid #999;
    margin: 3px 0;
    font-size: 1.2rem;
}
.box-add-select-title{
    font-size: 1.5rem;
    
}

.box-add-select-input{
    width: 95%;
    height: 30px;
    border-radius: 5px;
    border-color: #96999b;
}
.checkbox{
    font-size: 1.5rem;
    height: 40px;
    line-height: 30px;
    align-items: center;
}
.checkbox p{
    font-weight: 700;
}
.upload p{
    font-size: 1.6rem;
    padding: 10px 0;
    font-weight: 700;
}
.box-footer{
   margin: 3% 5%;
}
.btn{
    padding: 5px 15px;
    background-color: rgb(0, 195, 255);
    color: #fff;
    border: none;
}
    

</style>