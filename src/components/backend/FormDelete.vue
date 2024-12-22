<script setup>
    import axios from "axios";
    import { ref } from "vue";
    import { useRoute } from "vue-router";
    const {endpoint} = defineProps(['endpoint'])
    const router = useRoute();

    const destroy = async() => {
        const id = router.params.id;
        
        if(window.confirm('bạn có chắc muốn xóa ')){
            try {
                const response = await axios.delete(endpoint + '?id=' + id)
            } catch (error) {
                console.log(error);
                
            }
        }
        
    }
</script>
<template>
     <div class="container-wrapper">     

                <div class="body-add">
                        <section class="body-add-content">
                            <h2>Quản lý sản phẩm</h2>
                        </section>
                        <div class="body-add-box" style="height:500px ; overflow-y: auto; "  >
                            <div class="body-add-box-content">
                                <h3 class="box-content-title">Xóa sản phẩm</h3>
                            </div>
                            <form  @submit.prevent="destroy">
                                    <div class="body-box-add-select">
                                        <p  class="box-add-select-title">Tên sản phẩm</p>
                                        <input 
                                            type="text" 
                                            readonly
                                            name="name"  
                                            placeholder="Nhập tên sản phẩm" 
                                            class="box-add-select-input"
                                        >
                                            
                                    </div>
                                   
                                    <div class="box-footer">
                                        <button type="submit" class="btn ">Xóa sản phẩm</button>
                                    </div>
                            </form>
                        </div>          
                </div>
            </div>
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