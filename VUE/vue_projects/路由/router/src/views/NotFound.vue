<template>
  <div class="box">
    <h1>404 Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <router-link to="/">Go to Homepage</router-link>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .box
    {
        text-align: center;
        padding: 50px;
        font-size: 24px;
        color: #333;
        background-color: #f5f5f5;
        border-radius: 10px;
        margin-top: 50px;
        margin-bottom: 50px;
        box-shadow: 0 0 10px #ccc;
        
    }

</style>