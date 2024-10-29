<template>
  <div class="container">
   <div class="wrapper">
    <router-view></router-view>
   </div>
  
  </div>

</template>

<script>
export default {
  

}
</script>

<style scoped>
  .container
  {
    background-color: gainsboro;
  }
  .wrapper
  {
 
    width: 1000px;
    height: 1300px;
    padding-bottom:100px ;
    margin: 0 auto;
    background-color: white;

    
  }
 
</style>