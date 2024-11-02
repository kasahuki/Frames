<template>
  <div id="app">
   <div class="login">
    <van-button type="primary" @click="$router.push('/login')">Login</van-button>
   </div>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
.app
{
  position: relative;
}
.login
{
  position: absolute;
  top: 15px;
  right: 15px;

}
</style>
