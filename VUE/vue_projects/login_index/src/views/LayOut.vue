<template>
    <div class="container">
        <router-view></router-view>
        <van-tabbar route v-model="active">
  <van-tabbar-item replace to="/home" icon="home-o">home</van-tabbar-item>
  <van-tabbar-item replace to="/about" icon="search">about</van-tabbar-item>
  <van-tabbar-item replace to="/login" icon="user">center</van-tabbar-item>
  <van-tabbar-item replace to="/cart" icon="cart">cart</van-tabbar-item>
  <van-tabbar-item replace to="/contact" icon="contact">contact</van-tabbar-item>
</van-tabbar>
    </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
