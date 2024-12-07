<script setup>
     import '@/assets/grid.css';
    import '@/assets/base.css';
    import Layout from "@/components/backend/Layout.vue";
    import {ref , onMounted} from 'vue' ;
    import axios from 'axios';
import csrf from '@/config/csrf';

    const formData = ref({
        name : '' , 
        quantity : ''

    })
    const formErrorMessage = ref({})
    const create = async () => {
        try {
            await csrf.getCookie()
            const response = await axios.post('http://localhost:3000/api/product/Store',formData.value)
            
            
        } catch (error) {
           if(error.response.status == 422){
                formErrorMessage.value = {}
                Object.keys(error.response.data.errors).forEach(key => {
                    console.log(error.response.data.errors[key][0]);
                    formErrorMessage.value[key] = error.response.data.errors[key][0]
                })
            } else{
                formErrorMessage.value.message = error.response.data.message
            }
            
        }
    }
 


    
  
</script>

<template>
    <layout>
        <template #template>
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
                                        class="box-add-select-input">
                                        <div>
                                         <div v-if="formErrorMessage.name" class="form-error" style="color:red ; font-style:italic ;">
                                            {{formErrorMessage.name}}
                                        </div>    
    
                                        </div>
                                    </div>
                                    <div class="body-box-add-select">
                                        <p class="box-add-select-title">số lượng sản phẩm</p>
                                        <input 
                                        type="text" 
                                        v-model="formData.quantity" 
                                        name="quantity"  
                                        placeholder="Nhập số lượng" 
                                        class="box-add-select-input">
                                        <div>
                                        <div v-if="formErrorMessage.quantity" class="form-error" style="color:red ;font-style:italic ;">
                                            {{formErrorMessage.quantity}}
                                        </div> 
                                        </div>
                                    </div>
                                    <!-- <div class="body-box-add-select">
                                        <p  class="box-add-select-title">giá sản phẩm</p>
                                        <input type="text" value="" name="price"   placeholder="Nhập giá sản phẩm" class="box-add-select-input">
                                        <div>
                                          
                                        </div>
                                    </div>
                                    <div class="body-box-add-select">
                                        <p  class="box-add-select-title">giá sale</p>
                                        <input type="text" value="" name="sale_price"   placeholder="Nhập giá sale" class="box-add-select-input">
                                        <div>

                                        </div>
                                    </div>
                                    <div class="body-box-add-select">
                                        <label style="font-size:15px ;" for="">Danh mục sản phẩm</label>
                                        <select class="form-control" name="category_id"> 
                                                  
                                        <option  value=""></option> 
                                                  
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
                                        <div>

                                        </div>

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
    .body-add{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.body-add-content{
    width: 90%;
    font-size: 1.5rem;
    padding: 20px 0;
    
}
.body-add-box{
    width: 90%;
    background-color: #ffffff;
    border-top: 4px solid #14e8f0;
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