<template>  
  <div class="container">
    <div class="details">
      <div class="title">
        {{this.article.title}}
      </div>
      <div class="date">
        {{this.article.date}}
      </div>
      <div class="content">
        {{this.article.content}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  async  created() {
    const id=this.$route.query.id// 获取路由参数
    const res = await axios.get(`http://localhost:3000/posts/${id}`)
    this.article = res.data 
  },
  data() {    
    return {
      article: {}
    }
  }
}
</script>

<style scoped>

  .details
  {
   height: 100vh;
    background-color: #f2f2f2;

   
  }
  .title
  {
    border-bottom: 1px solid #000;
    font-size: 50px;
    font-weight: bold;
    margin-top: 50px;
    text-align: center;
  }
  .date
  {
    margin-top: 2px;
    font-size: 12px;
    color: grey;
  }
  .content
  {
    font-size: 16px;
    line-height: 1.5;
    margin-top: 50px;
  
  }
  

</style>