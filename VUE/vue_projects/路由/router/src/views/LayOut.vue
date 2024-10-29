<template>
  <div class="container">
    <div class="box">
       <div class="content">
        <router-view>

        </router-view>
       </div>
       
        <div class="footer">
            <div class="item">
                <router-link to="/ArticleItems">首页</router-link>
            </div>
            <div class="item">
                <router-link to="/PersonCenter">个人中心</router-link>
            </div>
          
            <div class="item">
                <router-link to="/UserLike">我的收藏</router-link>
            </div>
            <div class="item">
                <router-link to="/UserMessage">消息通知</router-link>
            </div>
            <div class="item">
                <router-link to="/UserSetting">设置</router-link>
            </div>
        </div>

    </div>
  </div>
</template>

<script>


export default {

}
</script>

<style scoped>
    .box
    {
        position: relative;
    }
    .content
    {
        background-color: white;
    }
   .footer
  {
    display: flex;
    justify-content: space-around;
    line-height: 60px;
    position: fixed;
    width: 1000px;
    height: 60px;
    background-color: black;
    bottom: 0;

  }
  .item
  {
    
    border: 1px solid #000;
    flex: 1;
    text-align: center;
    transition: .5s;
    
    
  }
  a
  {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: white;
    font-size: 25px;
  }

 .router-link-active
  {
    background-color: greenyellow;

  }
</style>>