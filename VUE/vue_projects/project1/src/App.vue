<template>
  <div class="box" v-loading="isloading">
    <CloseWindow :visible.sync="isShow"> 
      <!-- 父组件传递给子组件的自定义属性 -->
       <template v-slot:title>
         温馨提示
       </template>
       <template v-slot:content>
          确定吗

       </template>
    
    </CloseWindow>
    <CloseWindow :visible.sync="isShow"> 
      <!-- 父组件传递给子组件的自定义属性 -->
      <template v-slot:title>
          
        hahaha
      </template>
      <template v-slot:content>
          真的要关闭吗？

      </template>
    </CloseWindow>
    <div class="click">
      <button @click="isShow='true'">点击</button>
    </div>
   
   <input v-focus type="text">
   <h1 v-color="color1">指令的值</h1>
   <h1 v-color="color2">指令的值</h1>
  </div>

</template>

<script>
import axios from 'axios'; 
// 导入axios 前提是 要 安装axios axios的安装方法 npm install axios --global (全局安装))
import CloseWindow from './components/CloseWindow.vue';
export default {
      components: {
        CloseWindow
      },
      //注册组件
      data() {
        return {
          isShow:false,
          color1:'red',
          color2: 'green' ,
          isloading:true,


        }
      },
      async created() {
       
        const res =await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        setTimeout(() => {
          //this.list = res.data.data; //更新数据也要一定时间，这里用setTimeout模拟
          //用于页面v-for渲染数据
          this.isloading = false
        }, 300)
        console.log(res.data)
      },
      directives: {
        //自定义指令
        //每个自定义指令中都有钩子函数
        focus: {  
          inserted(el) {  
            el.focus()
          }
        },
        //inserted 提供的是元素 被添加到页面时的逻辑，binding 包含了指令的相关信息
        color:{
        inserted(el,binding) {
          el.style.color = binding.value
          //binding.value 就是指令的值
          //类似函数的形式，可以接收参数
          //但是数据变化时，并不会触发这个函数，需要手动调用一下
      },
      //update 指令的值发生变化时触发的钩子函数
      update(el,binding) {
        el.style.color = binding.value
      }
    },
    loading:{
      inserted(el,binding) {
        
      binding.value?el.classList.add('loading'): el.classList.remove('loading')
    },
    update(el,binding) {
      binding.value?el.classList.add('loading'): el.classList.remove('loading')
      //就是看值的变化，然后添加或移除loading类(操作dom)
      
    }
  }


      } 
     
}
</script>

<style>
  .click{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .click button{    
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
  }
  .loading:before 
  {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;   
  
    background:white url(../tenor.gif);
    /* 可以合起来写 */
    /* 定位实现居中 */
    z-index: 1000;
    background-size: 10%;
    background-repeat: no-repeat;
    background-position: center;
  }

</style>