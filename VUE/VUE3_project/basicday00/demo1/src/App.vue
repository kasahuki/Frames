<script setup>
import { useCounterStore } from './store/counter'
import test1 from './components/threshold/test1.vue'
const counter = useCounterStore()
// 基于函数原理拿到这个仓库对象
const doubleCount = () => {
  counter.count=counter.double
}
</script>
<template>
  <test1>
    
  </test1>
  <h1>{{ counter.count }} - {{ counter.msg }}</h1>
  <button @click="counter.increment">+</button>
  <button @click="counter.decrement">-</button>
  <button @click="doubleCount">Double</button>
</template>
<style scoped>
  button
{
  margin-top: 20px;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: none;
  background-color: #42b983;
  color: #fff;
  cursor: pointer;
  
}
</style>