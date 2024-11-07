<script setup>
  import { ref, computed, watch, reactive } from 'vue'

  const count = ref(5)
  const name = ref('senjay')
  watch([count, name], (newarr, oldarr) => {
    console.log('count or name changed', newarr, oldarr)
  }, {
    deep: true,
    immediate: true
  })

</script>
<template>
  <div>
    <p>当前计数：{{ count }}</p>
    <p>当前姓名：{{ name }}</p>
    <button @click="count++">点击++</button>
    <button @click="name+='s'">添加s</button>
  </div>
</template>
<style scoped>
  button {
    background-color: #42b983;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-bottom: 10px;
    transition: all 0.3s ease;
  }
</style>