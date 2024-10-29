<template>
  <div>
    <div class="articleMain" @click="$router.push(`/ArticleDetails?id=${item.id}`)" v-for="item in articleList" :key="item.id">
        <div class="title">
            <h1>{{item.title}}</h1>
        </div>
        <div class="time">
            <p> {{item.date}}</p>
            <p> {{item.content}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//使用前要导入 （前提是安装的axios）
export default {
    data() {    
        return {
            articleList: [],   //表明是一个空数组
            // car:{} //表明是一个空对象
            
        }
    },
   async created() {
        const res=await axios.get('http://localhost:3000/posts')
        this.articleList=res.data
       

    },
    methods: {  
     
   
}
        
    
}
</script>

<style scoped>
.articleMain {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 10px;
    border-radius: 5px;
    transition: .3s;
    border-radius: 20px;
}     
.articleMain:hover
{
    box-shadow: 0 0 10px #ccc;
    cursor: pointer;
    background-color: black;
    color: white;
    
}       
.title {
    margin-bottom: 10px;
}            
.time {
    margin-top: 10px;
    font-size: 14px;                    
}               
.title h1 {
    font-size: 20px;
    font-weight: bold;
}            
.time p {
    margin-bottom: 5px;
}               
.time p:last-child {
    margin-bottom: 0;
    }            
.content {  
    font-size: 16px;
    line-height: 1.5;
    margin-top: 10px;

        }            
.content p {
    margin-bottom: 10px;
    }            
    .content img {
        max-width: 100%;
    height: auto;
    }               

</style>