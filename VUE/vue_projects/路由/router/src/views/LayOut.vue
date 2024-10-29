<template>
  <div class="container">
    <div class="box">
        <div class="footer">
            <div class="item"></div>
          
            <router-link to="/PersonCenter">个人中心</router-link>
           <router-link to="/UserLike">我的收藏</router-link>

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
   .footer
  {
    display: flex;
    justify-content: space-around;
    line-height: 100px;
    position: fixed;
    width: 1000px;
    height: 100px;
    background-color: aquamarine;
    bottom: 0;

  }
</style>>