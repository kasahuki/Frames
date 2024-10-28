# vue本质以及特征

**引用： <script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"></script>**

**key : 渐进式 基于数据渲染**

![image-20241021224036608](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241021224036608.png)

---



![image-20241021224102047](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241021224102047.png)

# 插值表达式

**表达式含义: 凡是能算出来||有结果的式子就是表达式!**



![image-20241021224436073](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241021224436073.png)

![image-20241022135639437](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022135639437.png)



# 核心特性 响应式

**底层是使用操作dom实现的**

**而vue 主要关心于==数据==**

![image-20241021224625068](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241021224625068.png)

**v-html**

![image-20241022141315534](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022141315534.png)

![image-20241021224650536](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241021224650536.png)



# vue 常用指令 

![image-20241021225922955](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241021225922955.png)



![image-20241021225928583](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241021225928583.png)

！主要区别：**可恢复和永久**

 ## 流程控制

**主要分为 if else else if for**(用于渲染页面)

 ~~~js
  <div class="app">
         <div class="box1" v-if="age>17&&age<20">
             dfs bfs 二分 前缀和 最短路(?) dp(?) 数论(?) 贪心 (?)
         </div>
         <div class="box2" v-else-if="age<40">
             <!-- 注意属性名要使用 - 来连接 -->
             测试2
         </div>
         <div class="box3" v-else >
             测试3
         </div>
 
         <!-- v-if 后写bool 判断 -->
          <!-- 流程控制的使用  -->
           <!-- for循环 -->
 
     </div>
 ~~~







![image-20241021230001931](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241021230001931.png)

**注意是函数名** 

![image-20241022144930703](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022144930703.png)

​	

## ==注意使用原生js和vue渲染案例== 

**核心： 循环 + 遍历**

![image-20241022171316206](C:/Users/33813/AppData/Roaming/Typora/typora-user-images/image-20241022171316206.png)

## v-for 中的key 类似mysql 中的主键

### 加与不加key

![image-20241022171504149](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022171504149.png)

![image-20241022171745493](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022171745493.png)

**注意在script 中 要用this 在外面就不用了 直接 变量名即可**



js の review ： filter 

array.filter(item => item>2)

**筛选出满足条件的**

**功能 ： 创建 新数组 不会改变原数组**





# 指令修饰符

![image-20241022172414250](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022172414250.png)

**<font size=6>事件冒泡 : 比如点击儿子，如果父亲也设置了事件监听 的话父亲也会触发事件</font>**

![image-20241028213012741](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028213012741.png)

![image-20241028212819663](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028212819663.png)

# v-model（重要）

![d2414fc82bbd01ae4d42e1ad2409150](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/d2414fc82bbd01ae4d42e1ad2409150.jpg)

**sync update 类似 双向绑定 !!!**

![image-20241022172113459](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022172113459.png)

## 表单样式review

**作用 ： 给==表单元素==使用的！** 

**实现了==双向 数据绑定==**  **也就是 可以快速获取或者设置   ==表单元素内容==**



**单选框和复选框**

![image-20241022220550035](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022220550035.png)

![image-20241022220626917](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022220626917.png)

### to-do-list 案例

![image-20241022224019771](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022224019771.png)'

**1.filter 的使用** filter 是创建新数组 所以不会改变原数组 所以 要赋值

**2.事件绑定的函数传参** 

**3.script 调用 和 html调用 vue对象属性的方法**



# v-bind 对样式的控制 

![image-20241022220208009](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022220208009.png)

![image-20241022220536005](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022220536005.png)

**js中 style 都要使都要使用 小驼峰** 

# 计算属性 以及 计算属性的完整写法

![image-20241022220739707](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022220739707.png)

![image-20241022220746085](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241022220746085.png)

# watch 监听



![image-20241025155534394](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025155534394.png)

![image-20241025162217704](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025162217704.png)

接口代码:https://applet-base-api-t.itheima.net/api/translate

**实现防抖 : 防止频繁提交任务导致服务器卡顿**

**重要逻辑：设置延时器和清除延时器！**

**！！！重点:调整async的位置 要保证在 await 上一个函数前面**

![image-20241025173330536](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025173330536.png)

![image-20241025172709166](C:/Users/33813/AppData/Roaming/Typora/typora-user-images/image-20241025172709166.png)



## 完整watch监听



![image-20241025173039803](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025173039803.png)

**但这样只能监听一个值的变化，如果要多个的话写相同的逻辑太麻烦了！！**

**handler : 声明监听到数据变化后的处理函数！！**

selcet 表单 v-model 内容对应的是option中的value 值 

review ：表单中的value值

![image-20241025185220290](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025185220290.png)

![image-20241025185320019](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025185320019.png)

**参数直接传newValue对象过去**



# 生命周期

![、](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025201308951.png)

---



![image-20241025201303580](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025201303580.png)

~~~html
 <script>
        const app =new Vue({
            el:'#app',
            data:
            {

            },
            //数据
            methods:
            {

            },
            //方法
            watch:
            {

            },//监听阶段

            
            //创建阶段
            beforeCreate()
            {

            },
            created()
            {


            },
            //挂载阶段
            beforeMount()
            {

            },
            mounted()
            {

            },
            //更新阶段
            beforeUpdate()
            {

            },
            updated()
            {

            },
            //卸载阶段
            beforeDestroy()
            {

            },
            destroyed()
            {

            },


        })
    </script>
~~~

**注意钩子函数的放置位置！！**

## ！焦点

![](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026001019580.png)·

首先， autofocus 是一个自动显示焦点的属性 适用于有输入功能的表单！
`autofocus` 属性只在页面首次加载时由浏览器自动处理

动态添加聚焦也不行 

**必须要实现方法**

![image-20241026142502078](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026142502078.png)

**浏览器渲染 过程 ：首先是html如果遇到js也就是脚本语句就会停止html的解析 转而执行 js的代码！！！**

![image-20241026145954976](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026145954976.png)

![image-20241026150100426](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026150100426.png)

解决方案：

利用 `mounted`	 生命周期钩子，在组件挂载到 DOM 上之后，通过 JavaScript 手动设置焦点。



![image-20241026001818816](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026001818816.png)

# 工程化开发 & 脚手架 Vue CLI

**webpack 和 vite（构建工具）**

![image-20241025202101171](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025202101171.png)·



![image-20241025202108614](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025202108614.png)·

**一定要进入项目文件中才可以开始启动**

![image-20241025205534973](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241025205534973.png)`



**启动时 看前面的 ==serve==  npm run ==serve==** 	(package.json)

**记住项目名以后都不要有中文**

**但凡有中文最好改为英文**

## 模板文件库

**.vue（核心文件）也就是组件文件，每个文件就是分为三个部分，1.结构（由各个组件组成）**

**2.逻辑（导入其他组件和注册组件还有就是和之前普通开发模式进行动态渲染数据的格式一样）**

**3.样式 （修饰各个组件的每个部分以及组件的组件的……每个部分的样式！**）



![a660c6efc588e390a60edecfde1cd0f](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/a660c6efc588e390a60edecfde1cd0f.jpg)

![8feabb9353f657dd4b11d47517c0d0f](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/8feabb9353f657dd4b11d47517c0d0f.jpg)

![image-20241026003851493](C:/Users/33813/AppData/Roaming/Typora/typora-user-images/image-20241026003851493.png)

![image-20241026003857081](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026003857081.png)

**安装逻辑：**使用命令行首先要有一个安装工具 npm install --global yarn

选择全局安装（？？）

**--global --对应单词 -对应字母** 

## ！main.js文件！

![](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026005612485.png)



### `**知识点 ： 浏览器渲染 、vue本质 ，dom 、虚拟dom 、箭头函数 、es6语言特性**`

## 局部组件注册

**在根组件中导入普通组件和注册普通组件！！==》 才可使用**

**特点**：只可在 普通组件自身中使用不可在其他组件中使用不然就像app.vue根组件一样==**导入并注册**==！！

![1a433de51f00fa40ffd37c04b9bbe23](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/1a433de51f00fa40ffd37c04b9bbe23.jpg)

### 简写

**由于组件名和组件对象名一样也可以简写为 一个名字即可**



![753761cbdc7e392bf12911bcc130920](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/753761cbdc7e392bf12911bcc130920.jpg)

**注意：大驼峰命名法**

而且一定要muti-words



## 全局组件注册

**注意 ： 是在main.js中导入全局组件这样所有组件都可以使用这个组件无需重复导入注册操作增加重复复杂度**



![](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026005343462.png)

**注意是在main.js中书写！！！**

**对于main.js中**

![image-20241026005612485](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026005612485.png)

render函数 createElement作为参数（其实也是函数）

---



**template 会被编译成 render 函数。因此，模板语法是 render 函数的更简洁的高级封装**

![image-20241026140236551](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026140236551.png)

---



![image-20241026140239611](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026140239611.png)

![image-20241026151359820](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026151359820.png)

## scoped 样式冲突

![image-20241026150553209](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026150553209.png)

![image-20241026150646356](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026150646356.png)

---





![image-20241026154213964](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026154213964.png)

# data一定要是个函数

![image-20241026155157648](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026155157648.png)

# 组件通信

![image-20241026155451606](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026155451606.png)

## 组件关系

**1.父子关系**

**父传子**

![image-20241026160118606](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026160118606.png)

**注意时prop 属性** 

**子传父**



![image-20241026160341988](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026160341988.png)

**父组件中的事件监听名要于子组件消息名一样**

**2.非父子关系**

…………………………

## prop详解

![image-20241026162948428](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026162948428.png)

子想要有父组件的数据，利用自定义属性 ，父与子联系肯定是在子组件里，所以自定义属性写在父组件中的son组件里

**组件的属性可以是自定义的！！**

**组件属性也可以传对象**

### 规范prop传值

![image-20241026164944298](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026164944298.png)

![image-20241026165027476](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026165027476.png)

**注意：属性 也是可以 用字符串拼接的 就像img标签的src属性值也可以动态渲染或者静态渲染**

**注意有些属性是要单位的 所以用字符串拼接！！！**

![image-20241026170444331](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026170444331.png)

required 规定不为空 --》 true	 

**可以mysql类比**

**validator （验证器）类似函数 判断value是否合法**

### data 和prop区别（父组件的porp单向数据流）

**也就是儿子改变父亲 父亲进而又影响儿子**



![image-20241026171429655](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026171429655.png)

**利用子传父**

data是自己的随便改

问题就是 ： 父子组件通信到底有什么用

## 会被vue3的pinia替代的



---



# V-model 应用于 组件

### V-model 本质



![image-20241026171921558](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026171921558.png)

前者：数据改变视图 

后者 ：视图（输入）改变数据

==$event== 用于获取事件的形参

**事件就是监听事件**

## 表单类封装 （使用V-model 简化开发）

*<u>子传父本质就是 儿子组件想要改变父组件的值 首先先要父传子，传输数据 ，然后再通知父组件要修改数据 把要修改的数据传回父组件 最后父组件在自己的data中修改</u>*

**由于V-model是双向绑定的，所以呢子组件如果使用了v-model绑定了父传子传过来的数据的话就会报错，因为子组件是不允许修改父组件的数据的!**



## V-model 解绑

![image-20241026173541237](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026173541237.png)·

**除此之外还得 通知父组件改值 了！！**



**@change 专用于表单 （表明表单值value 发生变化时的监听事件！！**）



![image-20241026174132887](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241026174132887.png)

![image-20241026174029526](C:/Users/33813/AppData/Roaming/Typora/typora-user-images/image-20241026174029526.png)’

**事件对象（Event Object）是当事件发生时自动创建的一个对象，包含了与该事件相关的所有信息。事件对象会作为参数传递给事件处理函数**

拿到事件对象

e.target 事件对象的发生源也就是谁change了 --》表单 --> 表单的值 value

this.$emit('事件名（父组件监听这个事件）','传的参数')

---

### 对于v-model 简写 

启示：善于利用所学知识！了解本质！
**问题：如何简化！！**

# .sync 修饰符

[update注意坑点，牢记单词拼写问题](#注意坑点 上面的不是 updated 而是 update)

![image-20241028212403448](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028212403448.png)

## 父子属性双向绑定

类似V-model

![image-20241027085649759](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027085649759.png)

### 父组件

~~~vue
<template>
  <div id="app">
    <CloseWindow :visible.sync="isShow"> 
      <!--了解本质sync 同步-->
      <!-- 父组件传递给子组件的自定义属性 -->
    </CloseWindow>
    <div class="click">
      <button @click="isShow='true'">点击</button>
    </div>
   
  </div>

</template>

<script>
import CloseWindow from './components/CloseWindow.vue';
export default {
      components: {
        CloseWindow
      },
      //注册组件
      data() {
        return {
          isShow:false

        }
      }
}
</script>
~~~

### 子组件

~~~VUE
<template>
  <div v-show="visible" class="box">
    <div class="header">
        <h2>温馨提示</h2>
        <button @click="handleClose">X</button>
    </div>
    <div class="content">
       <p>你确定要关闭当前窗口吗？</p>
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
            //了解本质
            //触发update:visible 事件 事件对象传参是flase
        }
    }   
}
</script>

~~~

**review 事件发生以及事件对象**



# ref 和 $ref (更精确地获取dom元素)

`ref` 是一个 Vue 模板中的指令（attribute），用于标识一个 DOM 元素或子组件，允许在 Vue 实例中引用它。通过 `ref`，你可以在 Vue 组件的 JavaScript 部分访问这些元素或组件

 ![image-20241027100142918](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027100142918.png)

**document是查找当前页面的而不是单一一个组件而是所有组件 所以名字可能会冲突**

## 应用于组件

**子组件中：**



## ![image-20241027101127146](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027101127146.png)

**函数可返回一个对象**

父组件中：



![image-20241027101218470](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027101218470.png)·





![image-20241027101512489](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027101512489.png)、

### **可以拿到组件或者标签（dom）然后使用 它的method（其内部封装的）**

==**也可用于获取组件**==

## Vue ==异步更新== 和 $nextTick

![image-20241028214922338](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028214922338.png)



![image-20241027102930719](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027102930719.png)

![image-20241028214933286](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028214933286.png)

所以在显示 dom（输入框）时其实并没有获取到dom元素！！！！

![](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027103211452.png)

使用setTimeout也行但是不够精准

**nexttick是等  dom更新完 立刻执行准备的函数！！！**

异步更新是什么意思： 

---

# 自定义指令

**自己定义的指令 可以封装一些dom操作 扩展额外操作！**

`inserted` 是一个生命周期钩子，用于指令被插入到父节点时调用。

![image-20241027135621941](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027135621941.png)

![](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027140608759.png)

## 全局注册指令 

在main.js中定义 

**el就是指令所绑定的元素（标签）！**

在所有组件中均可使用 ！

inserted是个钩子函数 

## 局部注册指令 

只可在当前组件中使用！

![image-20241027140851017](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027140851017.png)

自定义指令 ———— 传值 （参数）

![](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027142538173.png)

**binding.value 就是 这个 传过来的参数！！**

## ==注意坑点 上面的不是 updated 而是 update==

![image-20241027154326778](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027154326778.png)

还用于上面的属性变化时使用 [点击跳转](#.sync 修饰符)

## v-loading 封装

**理解需求：空白太长时间了！！**

![image-20241027142658506](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027142658506.png)

![image-20241027142815304](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027142815304.png)

**==蒙层== 和控制 类的==dom操作==review**

**为什么要before**

如何居中定位图

~~~css
.loading:before 
  {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;   
  
    background:white url(../tenor.gif);
    /* 可以合起来写 */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
     <!--无效--> 
     background-position: center;
     <!--有效--> 
 
    /* 定位实现居中 */
    z-index: 1000;
    background-size: 10%;
    background-repeat: no-repeat;
   

  }
~~~



css 属性  background-position: center; 让背景图片居中

  background:white *url*(../tenor.gif); 可以合起来一起写 防止被覆盖 还可以搞个gif图

inserted钩子函数只是 进行初始的

**如果数据变化就要用update钩子函数**

~~~js
  <div class="box" v-loading="isloading">
    <CloseWindow :visible.sync="isShow"> 
      <!-- 父组件传递给子组件的自定义属性 -->
    </CloseWindow>
    <div class="click">
      <button @click="isShow='true'">点击</button>
    </div>
   
   <input v-focus type="text">
   <h1 v-color="color1">指令的值</h1>
   <h1 v-color="color2">指令的值</h1>
  </div>
~~~

~~~js
 loading:{
      inserted(el,binding) {
        
      binding.value?el.classList.add('loading'): el.classList.remove('loading')
    },
    update(el,binding) {
      binding.value?el.classList.add('loading'): el.classList.remove('loading')
      //就是看值的变化，然后添加或移除loading类(操作dom)
      
    }
  }
~~~

~~~js
  async created() {
       
        const res =await axios.get('https://jsonplaceholder.typicode.com/todos/1')
        setTimeout(() => {
          //this.list = res.data.data; //更新数据也要一定时间，这里用setTimeout模拟
          //用于页面v-for渲染数据
          this.isloading = false
        }, 300)
        console.log(res.data)
      },
~~~

**如果创建的变量 就一定要使用 console .log 打印出来即可**

# 注意点 

**每个组件都只能有一个根元素 也就是一个div 如果要多个的话就拿一个更大的包住即可**

# 插槽

作用 ： 让 组件内部 一些 提示==结构== 支持==自定义==

## 默认插槽--一个



![image-20241027155132747](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027155132747.png)

在slot中书写内容 （也可以是**标记语言（标签**））就是==后备内容==也就是默认值！！

## 具名插槽--多个

**问题就是区分 所以要取名字**

**多处结构需要外部传入标签进行地址**

**通过 template 包裹住 ！！**

**取名字（name 具名（具体名字））**

![image-20241027155630111](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027155630111.png)

**v-slot:head 简写为 #head**

**本质就是 子组件 可以进行 复用 根据 父组件的参数 在子组件中渲染**

## 作用域插槽

在 Vue.js 中，**作用域插槽（Scoped Slots）** 是一种强大的功能，允许父组件在子组件中使用数据。这种机制使得父组件能够在子组件的上下文中渲染内容，从而实现更灵活和可复用的组件设计。

### 作用域插槽的主要用途

1. **动态内容渲染**：
   - 允许父组件根据子组件提供的数据动态渲染内容。父组件可以访问子组件的状态，并根据这些状态决定如何显示内容。
2. **增强的组件复用性**：
   - 子组件可以提供一个通用的接口，父组件可以根据自己的需求使用这些接口，做到更高的复用性。相同的子组件可以在不同的父组件中有不同的表现。
3. **解耦合**：
   - 子组件不需要知道父组件的具体实现细节，只需提供数据接口。这样，父组件可以灵活地决定如何使用子组件提供的数据，增强了组件之间的解耦。
4. **灵活的布局**：
   - 通过作用域插槽，父组件可以决定如何渲染子组件的内容，包括添加额外的样式、结构或逻辑。

插槽分类只有两类：

![image-20241027160236112](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241027160236112.png)

![image-20241028215911850](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028215911850.png)

在父组件中使用 这个组件时可以使用 这个插槽带回来的数据 （相当于是父传子的逆过程）

![image-20241028215918397](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028215918397.png)

**如果是具名插槽 就是 #具名插槽name**

**传值就是 直接传属性（自定义也可）**

案例：

![image-20241028221302192](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028221302192.png)

**接收一个数组** 
使用组件传参数 渲染子组件时 -- > 多态！

![image-20241028222232473](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028222232473.png)

![image-20241028232256529](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028232256529.png)

**通过slot 传到父组件的值会被打包成一个对象** 

**接收时 obj.row   obj.msg**                   

~~~C++
<template>
    <div class="app">
        <StableComponent :persons="persons1">
            <template #default="obj">
                <button @click="del(obj.row.id)">删除</button>
                <!-- 体会下为什么能一一对应 -->
            </template>
           <!-- 父组件接受到子组件的值 -->
        </StableComponent>
        <br>
        <br>
         <StableComponent :persons="persons2">
            <template #default="obj">
                <button @click="view(obj.row)">查看</button>
            </template>
                
          
            
        </StableComponent>
    </div>
</template>

~~~



![image-20241029000539686](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029000539686.png)



# 路由入门

![image-20241028221842159](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028221842159.png)

---



![image-20241028221852372](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028221852372.png)

![image-20241028221904532](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028221904532.png)

---



![image-20241028221923475](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241028221923475.png)







# <-----**axios 前后端交互**----->



**端口只有一个 端口里的json文件只此一个，所以一次只能用一个json文件**



 <script src="https://cdn.bootcdn.net/ajax/libs/axios/1.7.2/axios.js"></script>

**导入axios脚本**





![image-20241023223834428](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241023223834428.png)

**详细见其他辅助框架md**

**以下是json文件！！**

![image-20241023223906155](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241023223906155.png)

**内有两个对象数组**！！！！s

![image-20241023224526838](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241023224526838.png)

## get和post 操作



![image-20241023224927955](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241023224927955.png)

## 修改与删除

![image-20241023235730069](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241023235730069.png)

**后面写id**

​	
