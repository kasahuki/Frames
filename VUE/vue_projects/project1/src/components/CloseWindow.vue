<template>
  <div v-show="visible" class="box">
    <div class="header">
        <slot name="title"><h2></h2></slot>
        
        <button @click="handleClose">X</button>
    </div>
    <div class="content">
       <slot name="content"><p></p></slot>
    </div>
    <div class="btn">
        <button>确认</button>
        <button>取消</button>
    </div>
  </div>
</template>

<script>
export default {
    props: {    
        visible: {
            type: Boolean,
            default: false
        }
        //接受父组件传递的visible属性，默认值为false
        //父组件改变visible的值，子组件的visible值也会跟着改变（单向流动）
    },
    methods: {
        handleClose() {
            this.$emit('update:visible', false);
        } 
    }   
}
</script>

<style scoped>
    .box
    {
        display: flex;
        flex-direction: column;
        padding: 10px;
        width: 400px;
        height: 200px;
        background-color: aliceblue;
        margin: 20px auto ;
    }
    .header
    {
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid #000;
        
    }
    .header button
    {
        height: 70%;
    }
   .btn button
    {
        font-size: 15px;
        width: 200px;
        height: 30px;
        
    }
    .btn
    {
        display: flex;
        justify-content: space-around;
    }
    .content
    {
        font-size: 20px;
        text-align: center;
        padding: 10px;
    }
    
</style>