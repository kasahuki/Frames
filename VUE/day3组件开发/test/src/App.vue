<template>
  <div id="app">
    <h1>Hello World</h1>
    <p>This is a Vue.js project</p>
    <button>Click me</button>
    <input type="text" placeholder="Enter your name">
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
      

    </ul>
      <HmHeader>
        
      </HmHeader>
    
      <MySon :title="mytitle" @changeTitle="handleClick"></MySon>
      
     
  </div>
</template>

<script>
import HmHeader from './components/HmHeader.vue'
import MySon from './components/MySon.vue'
export default {
  components: {
    // 注册组件
    HmHeader,
    MySon
    
    
  },    
  data() {
    return {
      todos: [
        { id: 1, text: 'Learn Vue.js' },  
        { id: 2, text: 'Build something awesome' }
      ],
      mytitle: 'fuck you world',


    }

  },
  methods: {    
    handleClick(newTitle) {
      this.mytitle = newTitle
    }
}
}
</script>

<style>
#app
{
  width: 1000px;
  height: 500px;
  text-align: center;
  margin: 0 auto;
}
ul
{
  list-style: none;
  padding: 0;
}
</style>