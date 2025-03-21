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



## find 找到对象

### 1. 使用 `find` 确定元素

`find` 方法会返回第一个匹配条件的元素。



```javascript
let idToFind = 2;
let element = linklist.find(item => item.id === idToFind);

console.log(element);
// 输出: { id: 2, name: "https://www.google.com", editing: false }
```

如果需要修改这个元素的属性：



```javascript
let idToFind = 2;
let element = linklist.find(item => item.id === idToFind);

if (element) {
  element.editing = true; // 修改该元素的 editing 值
}

console.log(linklist);
```

## splice & indexOf





**使用event事件 和 ref注意问题**



![image-20241215233149393](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241215233149393.png)

![image-20241215233255745](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241215233255745.png)

防止事件冒泡 @click = "" 不是这样 不要等于号以及右边的就行



![image-20241215233202595](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241215233202595.png)



![image-20241215233206955](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241215233206955.png)

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

~~~vue
<template>
    <div class="app">
        <StableComponent :persons="persons1"> //决定 传什么参数进去 
            <template #default="obj"> 接受到参数 (对象 )
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

**在index.js中 ！！**

~~~C++
import Vue from 'vue'
import VueRouter from 'vue-router'
import LayOut from '@/views/LayOut.vue' 
import ArticleDetails from '@/views/ArticleDetails.vue'
import ArticleItems from '@/views/ArticleItems.vue'
import NotFound from '@/views/NotFound.vue'
// 导入路由组件
Vue.use(VueRouter)
//VueRouter 插件初始化

//安装路由

//创建了一个路由对象
const router =new VueRouter({
    //配置路由规则
    routes:[
        {path:'/',redirect:'/LayOut'},
       {path:'/LayOut',component:LayOut},
       {path:'/ArticleDetails',component:ArticleDetails},
       {path:'/ArticleItems',component:ArticleItems},
       {path:'*',component:NotFound}
       
    ]
})
export default router
//有导入就要有导出

~~~

main.js中

~~~C++
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
//导入index.js里的路由组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
  //注入router
}).$mount('#app')

~~~



@ 表示 src文件夹

![image-20241029193720272](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029193720272.png)

![image-20241029193723436](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029193723436.png)

## 二级路由

~~~C++
routes:[
        {path:'/',redirect:'/LayOut'},//重定向 
       {path:'/LayOut',
        component:LayOut,
        children:[
            {path:'/PersonCenter',component:PersonCenter},
            {path:'/UserLike',component:UserLike}
        ],
        //二级路由

       },
       {path:'/ArticleDetails',component:ArticleDetails},
       {path:'/ArticleItems',component:ArticleItems},
       {path:'*',component:NotFound} //404页面
       
    ]
~~~

**children 嵌套**

## 视口在==多级路由==上的不同分配地区



![image-20241029220257488](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029220257488.png)

![image-20241029220310501](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029220310501.png)



## 声明式导航 

本质底层就是 a标签

![image-20241029221622803](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029221622803.png)

**模式设置**

![image-20241029223018693](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223018693.png)

# 通过点击锚点跳转 ==传参数==

## 分为查询参数传参和动态路由传参



![image-20241029223242043](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223242043.png)

![image-20241029223245278](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223245278.png)

**注意传过去是router 接收时route 单词拼写问题注意**

## 区别所在

![image-20241029223311287](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223311287.png)

# 跳转

## Window.location方法

也可用open

![image-20241215223851816](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241215223851816.png)

### 1. 获取当前 URL

当你读取 `window.location.href` 时，它会返回当前浏览器地址栏的完整 URL。

```
javascript复制代码console.log(window.location.href); 
// 输出当前页面的完整 URL，如 "https://www.example.com/path?query=1"
```

### 2. 设置新的 URL（跳转）

当你将一个新的 URL 赋值给 `window.location.href` 时，浏览器会自动跳转到该 URL，就像用户在地址栏中输入一个新的网址一样。

```
javascript复制代码window.location.href = "https://www.example.com"; 
// 浏览器会跳转到指定的 URL
```

3. 其他相关的 `window.location` 属性和方法

- **`window.location.pathname`**：获取或设置当前页面的路径部分（不包括协议、域名和查询参数）。
- **`window.location.search`**：获取当前 URL 中的查询字符串部分（包括 `?`）。
- **`window.location.hash`**：获取或设置当前 URL 的锚点（即 `#` 后的部分）。
- **`window.location.replace()`**：与 `href` 类似，但它会替换当前页面在浏览器历史中的记录，这意味着用户无法通过后退按钮返回到当前页面。
- **`window.location.assign()`**：与 `window.location.href` 类似，但它不会替换历史记录，因此用户可以使用后退按钮返回。



## 分为 path跳转 和 name跳转

![image-20241030222543232](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241030222543232.png)

**上下文！！！**

![image-20241030222551541](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241030222551541.png)





![image-20241029223423561](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223423561.png)

![image-20241029223446130](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223446130.png)

# 通过path/name跳转进行传参

各有两种传参数的方法 动态路由和基本参数 

![image-20241029223730382](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223730382.png)

![image-20241029223734259](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223734259.png)

![image-20241029223815672](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223815672.png)

![image-20241029223821937](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241029223821937.png)

**一个是query 一个是 params 接收**

## 问题：

**在layout 视口默认显示一个view组件的时候 可以配置二级路由，当path是当前默认页面的时候就跳转到这个二级路由上**

**如果是一级路由的话之前本来有的结构就没了**

==**配置随便配重点是跳转后以及跳转后显示的视口**==

~~~js
 data() {    
        return {
            articleList: [],   //表明是一个空数组
            car:{} //表明是一个空对象
            
        }
    },
~~~

当前页

~~~C++
<template>
  <div>
    <div class="articleMain" @click="$router.push(`/ArticleDetails?id=${item.id}`)" v-for="item in articleList" :key="item.id">
        <div class="title">
            <h1>{{item.title}}</h1>
        </div>
        <div class="time">
            <p> {{item.date}}</p>
            <p> {{item.content}}</p>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
//使用前要导入 （前提是安装的axios）
export default {
    data() {    
        return {
            articleList: [],   //表明是一个空数组
            // car:{} //表明是一个空对象
            
        }
    },
   async created() {
        const res=await axios.get('http://localhost:3000/posts')
        this.articleList=res.data
       

    },
    methods: {  
     
   
}
        
    
}
</script>
~~~

详情页

~~~C++
<script>
import axios from 'axios'
export default {
  async  created() {
    const id=this.$route.query.id// 获取路由参数
    const res = await axios.get(`http://localhost:3000/posts/${id}`)
    this.article = res.data 
  },
  data() {    
    return {
      article: {}
    }
  }
}
</script>
~~~

## 注意模板字符串的写法

# vue 工程化开发

![image-20241101213500485](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241101213500485.png)

![image-20241101213504114](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241101213504114.png)

## vant组件 注意版本（2，3）的兼容

**安装东西时 注意版本 是否适配当前的环境**

---



## 利用好类库 文档 （下载 按需导入 注册使用 拓展功能 ）

地址：https://vant-ui.github.io/vant/v2/#/zh-CN/home

![image-20241031164912564](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241031164912564.png)

如果vant导入组件都放在main.js 中就会太臃肿 

直接用一个相应的文件 （js文件）

然后直接在main.js 中 导入使用即可

**（方法论）**

~~~javascript
import Vue from 'vue'
import { Button, Tabbar, TabbarItem, Grid, GridItem } from 'vant'
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Grid)
Vue.use(GridItem)
~~~



## **vue-vuex 集中化状态管理**

**/src/store/index.js 专门存放vuex**

**类似 router /src/router/index.js**

**然后都导入到main.js 中** 

| 特性     | 普通父子组件传参              | Vuex                                         | Pinia                           |
| :------- | :---------------------------- | :------------------------------------------- | :------------------------------ |
| 数据流向 | 单向（props 向下，emit 向上） | 集中式状态管理                               | 集中式状态管理                  |
| 适用范围 | 简单的父子组件通信            | 中大型复杂应用                               | 中大型复杂应用                  |
| 复杂度   | 低                            | 高                                           | 中                              |
| API 设计 | Vue 基本特性                  | 较复杂（state, mutations, actions, getters） | 简洁（state, actions, getters） |
| 模块化   | 不适用                        | 支持嵌套模块                                 | 扁平化设计，无需嵌套            |





## store 的构建使用 

~~~VUE
// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
//这里的导入名字可以自定义，比如：import ElementUI from 'element-ui'
//导入
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

~~~

~~~vue
// index.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 安装插件
const store = new Vuex.Store({  //新建vue实例
  state: {
    count: 0,
    msg: 'hello'
  }
})
export default store
导出 

~~~

**vue-cli 脚手架** 

**安装过程 （项目集成文件配置s）**

## State

![8694a90cfe0e477646730d24a08e553](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/8694a90cfe0e477646730d24a08e553.jpg)

### 使用辅助函数映射 （简化）

首先现在要使用共享资源的组件中 导入 然后 书写 计算选项（options）

计算选项中 映射 count值

![image-20241030220603049](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241030220603049.png)

![image-20241030220609234](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241030220609234.png)

## Mutation

![f1cb160c2039c5a72cc9d5ea8fc7948](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/f1cb160c2039c5a72cc9d5ea8fc7948.jpg)

###  辅助函数 简化

![image-20241030221550421](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241030221550421.png)

**state 一定要带！！**

![4c688daae99e65684500e0641d254d8](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/4c688daae99e65684500e0641d254d8.jpg)

**导入可以导入多个 import {1,2,3,4,5} from '来自于哪个文件（字符串也要单引号）'**



## action和getter

![image-20241031231339222](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241031231339222.png)

---

![image-20241031233025222](C:/Users/33813/AppData/Roaming/Typora/typora-user-images/image-20241031233025222.png)



---

![image-20241031233001973](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241031233001973.png)





![image-20241031232934756](C:/Users/33813/AppData/Roaming/Typora/typora-user-images/image-20241031232934756.png)

### 辅助函数 mapaction

![image-20241031233117490](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241031233117490.png)

## getter 以及mapGetter 映射（辅助函数）



![image-20241031233133207](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241031233133207.png)

**组件名 一般 大驼峰** 

**变量 函数 为小驼峰**

![image-20241101225300916](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241101225300916.png)

---



## 同步和异步（待解决！）

**同步和异步问题总结**

| **问题** | **描述**                               | **应用问题**                                   | **解决方法**                                |
| :------- | :------------------------------------- | :--------------------------------------------- | :------------------------------------------ |
| **同步** | 程序执行的顺序是按照代码的顺序执行的   | 数据更新、事件处理、生命周期钩子               | -                                           |
| **异步** | 程序执行的顺序不是按照代码的顺序执行的 | 数据更新不及时、事件处理不及时、组件状态不一致 | async/await、Promise、Vuex、Vue生命周期钩子 |

**Vue中的异步和同步问题总结**

| **问题**         | **描述**                           | **应用问题** | **解决方法**                          |
| :--------------- | :--------------------------------- | :----------- | :------------------------------------ |
| **数据更新**     | 异步数据更新导致DOM更新不及时      | 用户体验不佳 | async/await、Promise、Vuex            |
| **事件处理**     | 异步事件处理导致事件处理不及时     | 用户体验不佳 | async/await、Promise、Vuex            |
| **生命周期钩子** | 异步生命周期钩子导致组件状态不一致 | 用户体验不佳 | async/await、Promise、Vue生命周期钩子 |

**解决同步和异步问题的方法总结**

| **方法**            | **描述**                           | **应用场景**                     |
| :------------------ | :--------------------------------- | :------------------------------- |
| **async/await**     | 使异步代码看起来像同步代码         | 数据更新、事件处理、生命周期钩子 |
| **Promise**         | 使异步代码看起来像同步代码         | 数据更新、事件处理、生命周期钩子 |
| **Vuex**            | 使数据更新和事件处理变得更加可预测 | 数据更新、事件处理               |
| **Vue生命周期钩子** | 使组件的状态变得更加可预测         | 生命周期钩子                     |



**异步操作和同步操作**

| 特性       | 异步操作                                     | 同步操作                                     |
| :--------- | :------------------------------------------- | :------------------------------------------- |
| 执行方式   | 不会阻塞代码执行，任务在后台处理。           | 阻塞代码执行，必须等待任务完成。             |
| 等待时间   | 可以立即继续执行后续代码，无需等待任务完成。 | 必须等待当前任务完成后才能继续执行后续代码。 |
| 使用场景   | 网络请求、文件读取、定时器等。               | 简单计算、变量赋值等。                       |
| 性能       | 提升应用响应速度，避免界面卡顿。             | 可能导致界面卡顿或无响应。                   |
| 代码复杂度 | 需要使用回调函数、Promise 或 async/await。   | 代码流程简单，易于理解和调试。               |

---



## ==导入==的问题

**Q&A:**

Q: **import router from './router/index.js**
**和**
**import router from './router**
**有什么区别**

**A; 后者会隐式的导入router文件里的index.js**



1. 安装插件：
   当你使用第三方插件来扩展 Vue 的功能时。这些插件通常需要进行一些全局设置。

    

   例如：

   

   ```javascript
   import VueRouter from 'vue-router'
   Vue.use(VueRouter)
   ```

2. 全局注册组件库：
   当你使用大型 UI 组件库，想要一次性注册多个组件时。

    

   例如：

   

   ```javascript
   import ElementUI from 'element-ui'
   Vue.use(ElementUI)
   ```

3. 自定义全局功能：
   当你创建自己的插件，想要添加全局方法、指令、混入等时。

    

   例如：

   

   ```javascript
   const MyPlugin = {
     install(Vue) {
       Vue.mixin({ ... })
       Vue.directive('my-directive', { ... })
       Vue.prototype.$myMethod = function() { ... }
     }
   }
   Vue.use(MyPlugin)
   ```

4. 状态管理库：

   使用 Vuex 等状态管理库时。

   **或是路由**

    

   例如：

   

   ```javascript
   import Vuex from 'vuex'
   Vue.use(Vuex)
   ```

---



**所有的（包括以上辅助函数简化的）都是 ：在模板中都是 使用 变量名 调用 然后逻辑中使用 this.变量名来调用**

| **导入类型**         | **书写规则**                              | **说明**               | **例子**                                    |
| :------------------- | :---------------------------------------- | :--------------------- | :------------------------------------------ |
| **默认导入**         | `import 名称 from '模块路径'`             | 导入模块的默认导出     | `import Vue from 'vue'`                     |
| **命名导入**         | `import { 名称 } from '模块路径'`         | 导入模块的命名导出     | `import { createApp } from 'vue'`           |
| **命名导入（多个）** | `import { 名称1, 名称2 } from '模块路径'` | 导入模块的多个命名导出 | `import { createApp, h } from 'vue'`        |
| **导入所有**         | `import * as 名称 from '模块路径'`        | 导入模块的所有导出     | `import * as Vue from 'vue'`                |
| **导入组件**         | `import 名称 from '组件路径'`             | 导入组件               | `import HelloWorld from './HelloWorld.vue'` |
| **导入插件**         | `import 名称 from '插件路径'`             | 导入插件               | `import axios from 'axios'`                 |
| **导入样式**         | `import '样式路径'`                       | 导入样式               | `import './styles.css'`                     |
| **导入图片**         | `import 名称 from '图片路径'`             | 导入图片               | `import logo from './logo.png'`             |

1. **主文件（main.js）**: 将导入语句放在主文件（main.js）中，可以使导入的模块或变量在整个应用中都可用。



```javascript
// main.js
import Vue from 'vue'
import App from './App.vue'

// Vue 和 App 可以在整个应用中使用
```

1. **组件文件（.vue文件）**: 将导入语句放在组件文件（.vue文件）中，只能在该组件内部使用导入的模块或变量。



```javascript
// HelloWorld.vue
import axios from 'axios'

// axios 只能在 HelloWorld 组件内部使用
```

1. **模块文件（.js文件）**: 将导入语句放在模块文件（.js文件）中，只能在该模块内部使用导入的模块或变量。



```javascript
// myModule.js
import Vue from 'vue'

// Vue 只能在 myModule.js 内部使用
```

1. **路由文件（router.js）**: 将导入语句放在路由文件（router.js）中，可以使导入的模块或变量在整个路由系统中都可用。



```javascript
// router.js
import Vue from 'vue'
import Router from 'vue-router'

// Vue 和 Router 可以在整个路由系统中使用
```

1. **store文件（store.js）**: 将导入语句放在store文件（store.js）中，可以使导入的模块或变量在整个应用的状态管理系统中都可用。



```javascript
// store.js
import Vue from 'vue'
import Vuex from 'vuex'

// Vue 和 Vuex 可以在整个应用的状态管理系统中使用
```



## ==导出==的问题



### 导出 实例

`export default store`

1. `default`：
   - 表示这是模块的默认导出。
   - 每个模块只能有一个默认导出。
   - 使用默认导出可以在导入时 不使用花括号 ，并可以给导入的内容任意命名。
     - 命名导出(==花括号==)可以有多个，而默认导出(default)只能有一个。
     - **`导入时`花括号里的名称通常需要与`导出时`使用的名称相匹配，而默认导出可以在导入时使用任意名称。**

![image-20241031165622658](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241031165622658.png)

![image-20241031165648237](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241031165648237.png)

![image-20241031165651518](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241031165651518.png)

# 路由配置组成结构 

**一级路由视口位于根路由，二级路由视口位于一级路由**

~~~js
const routes = [
  {
    path: '/',
    redirect: '/home' (path)  --> (/重定向 相当于 /home 变成了 /)
  },
  {
    path: '/telephone',
    component: telephone
  },
  {
    path: '/LayOut',
    component: LayOut,
    children: [
      {
        path: '/home', (/Layout/home/)
        component: HomeView
      },
      {
        path: '/about',
        component: AboutView
      },
      {
        path: '/contact'
      },
      {
        path: '/login',
        component: index
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFoundView
  }
]
~~~

根路由 ： / （app）

**一级路由 ： layout   telephone** 

**二级路由 : home about contact login**





# 封装axios 

![image-20241101001050620](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241101001050620.png)



**在request.js 模块中封装各种的axios 实例** 通过设置实例的参数 （如：基础地址 和 响应拦截器等等 ）

使用时可以直接**调用实例！**

~~~js
import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://smart-shop.itheima.net/index.php?s=/api',
  // 配置基址
  timeout: 5000
  // 请求的超时时间，单位是毫秒
})
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
  // 将请求回来的数据解构一层，返回给调用者
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return Promise.reject(error)
})
export default instance

~~~

**响应/请求 拦截器 是什么？**

**注意 在响应拦截器这里可以（详情见上注释**）

## 使用api模块封装操作（方法 / 函数）

然后直接在逻辑中**传参调用即可！**



---



为什么要有接口文档

**在里面导出各种 函数（方法）**

# 验证码（login组件）

~~~js
 async getPicCode () {
      const res = await request.get('/captcha/image')
      this.picCode = res.data.base64
      this.key = res.data.key
    },
    getmsg () {
      console.log('获取验证码')
      if (this.time === this.Totaltime && this.timber === null) {
        // 只有在倒计时结束时才可以重新发
        this.timber = setInterval(() => {
          this.time--
          if (this.time <= 0) {
            this.time = this.Totaltime
            // 恢复状态
            clearInterval(this.timber)
          }
        }, 1000)
      } else {
        Toast('请等待' + this.time + '秒后再获取')
      }
    },
    created () {
      this.getPicCode()
    }
~~~

1. **解耦created钩子函数和普通函数   -- 为了让点击时可以触发刷新验证码的功能！！！**

2. **防抖机制，防止一直点击获取然后重新（反复地）执行  只有在某种条件下才会重新执行逻辑**

# Toast 轻提示 使用注意

**复习原型链**

![image-20241102005333878](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241102005333878.png)

组件中逻辑` this.*$toast*('请等待' + this.time + '秒后再获取')`

toast('请等待' + this.time + '秒后再获取') 会报错 **要想使用这个就要在当前中导入**

**toast 是一个函数并不是一个样式**

# LoclalStorage

![image-20241102125831844](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241102125831844.png)

## 存储复杂数据类型 

**basic：** 

**localStorage 只能存储字符串类**

**JSON.stringify() 将复杂数据类型 转化为字符串**

**JSON.parse() 将JSON字符串转化为JSON 对象（键值对的形式）  json对象数组就是一堆json对象**

---



**`to-do-list`**

~~~js
  //将数据保存到localStorage，但没有在页面加载时从localStorage重新加载数据。因此，每次刷新页面时，数据不会自动恢复
            created() {
                const storedList = localStorage.getItem('obj')
                //获取本地存储中的数据 然后赋值给list
                if (storedList) {
                    this.list = JSON.parse(storedList)
                    // 页面刷新时，将本地存储中的数据 赋值给list
                    // 通过list渲染页面
                }
            },
~~~

~~~js
  updateLocalStorage() {
                    localStorage.setItem('obj', JSON.stringify(this.list));
                    //重新对obj进行JSON.stringify处理，再存入localStorage
                },
~~~

![image-20241102131544506](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241102131544506.png)

**核心 ： 整体对数组进行存储和增删改查**

# <-----**axios 前后端交互**----->

![image-20241103104659577](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103104659577.png)

## URL 组成部分

![image-20241103104733674](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103104733674.png)

​	域名 ： 标记服务器在互联网中的位置

![image-20241103105536336](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103105536336.png)‘

## HTTP协议 和请求报文

![image-20241103105748816](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103105748816.png)



## 响应报文

![image-20241103105839213](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103105839213.png)

![image-20241103105842741](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103105842741.png)



**axios 常见问题 **

cors 跨域问题

**钩子函数一定不要写在method方法中**



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

# javascript 关于函数的一切

## 普通函数：

~~~js
function fun() {
    return 100
}

const fun = function() {
    return 100
}

~~~

```javascript
// 只有在调用时，函数才会执行
console.log(fun()); // 输出：200
```

## 箭头函数

~~~js
const fun = x => x+10
const fun = () => 100
const fun = () => {
    return 100
}
箭头函数 （）中定义参数 如果是只有一个参数可以不写括号
~~~

### 两者的区别主要在于==函数中==this 的指向

**前者为动态的 后者是定义的时候就已经确定了**

**普通函数 ： 谁调用这个函数this就指向谁**

**箭头函数 ； 绑定到最近一层的普通函数的this**

例子：

~~~js
const obj = {
    value: 100,
    regularFunction: function() {
        const arrowFunction = () => {
            return this.value;
        };
        return arrowFunction();
    }
};

console.log(obj.regularFunction()); // 输出：100
~~~



# vue3 前端基本思想

**趋势：ai 解耦**

html 这种标记语言 是独立于操作系统的 是由浏览器解析的！

**js(利用事件循环和异步回调实现伪并发)，py是单线程语言**

**回调函数函数里面的参数就是函数**



### **异步的好处**

异步编程是一种**非阻塞（Non-blocking）**的编程方式，允许程序在等待某些任务完成的同时继续执行其他代码





---



**单独使用vue 不是工程化开发**

![image-20250121202338537](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250121202338537.png)



**工程化开发vue：**

![](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250121213332359.png)

![image-20250121213858990](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250121213858990.png)

**npm install 下载的模块就在node_modules**



vue插件自定义提示词快速生成

![image-20250121222012434](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250121222012434.png)

## Vue项目开发流程

### 文件之间的联系

![image-20250121214455984](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250121214455984.png)



![image-20250121215427391](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250121215427391.png)

## 基本语法补充

**`<ChildComponent></ChildComponent>` 的含义**

- 这是一种 **双标签** 的写法。
- 它表示一个可能有子内容（即插槽内容）的组件。
- 这种写法适合在需要向组件传递插槽内容时使用。
- 

**`<ChildComponent />` 的含义**

- 这是一种 **自闭合标签** 的写法。
- 它表示一个没有子内容（即没有插槽内容）的组件。
- 这种写法更加简洁，适合在组件不需要传递任何内容时使用。

---

将axios请求封装成一个**js文件**（在**src**（也就是**@**）目录下单独的**api目录**下））里**提供多个方法**（这些方法要导出export） 要使用就**导入**

![image-20250121224806804](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250121224806804.png)

![image-20250121224812993](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250121224812993.png)

**ref 问题 ： 是个对象 具体值要使用value获取**

- **`const`**：

  - 用于声明一个常量，**不能重新赋值**。

  - 但如果是对象或数组，其内部的属性或元素可以被修改。

    ```js
    const a = 10;
    a = 20; // 报错：不能重新赋值
    
    const obj = { name: "Alice" };
    obj.name = "Bob"; // 允许：修改对象的属性
    ```

  

**如果这个变量不会被重新赋值，那么使用 `const` 更符合语义**

---



**...xxx : 解构语法常用于 ：**

- **扩展语法**：将数组、对象或字符串“展开”为独立的元素。
- **剩余参数**：将多个参数“收集”到一**个数组或对象**中。 常作为==函数参数==  注意：**剩余参数必须是最后一个参数**



同 `.vue` 文件中的 `<script>` 标签内的变量是 **相互独立** 的，默认情况下不会冲突。这是因为每个 `.vue` 文件都是一个独立的模块，其作用域是隔离的

**所以这也是ref标记dom元素的优点**

**但是要注意不同.vue 的template 部分标签的id不能有重复的 因为最后都是要拼接起来的**



vue简单项目快速开始：**npm install 下载依赖** 

**布置文件结构**

在main.js 中书写导入语句

（**前两步和idea中配置后端项目类似**）

![image-20250122191042799](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250122191042799.png)

注意上面的APP **要全大写**

导入import相关 资源管理器坐标和快速开始使用组件/模块的代码实践 

app的使用！



**有表单一般就需要表单校验**



![image-20250122204718523](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250122204718523.png)

**所以前后端都需要校验**



### 路由基本知识

![image-20250123182242496](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250123182242496.png)

**Composition API（Vue 3） 使用路由**



~~~js
<template>
    <div>
        <h1>首页</h1>
        <button @click="goToAbout">跳转到关于我们</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToAbout = () => {
    router.push('/about'); // 跳转到 About 页面
};
</script>
~~~

### 子路由（路由的嵌套）

![image-20250123223316586](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250123223316586.png)



![image-20250123223436337](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250123223436337.png)

**重定向 redirect**



![image-20250123230358283](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250123230358283.png)

**注意点：**

1. **vue文件首字母大写**
2. 组件导入时命名由文件名多加个Vue

![image-20250124195011040](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124195011040.png)

同一个事件触发多个代码逻辑 就是相当于写函数内部的代码而已不过要写分号



### token 与pinia 的使用

**问题引出 ： 访问一些路由时没有携带token 就会出现401错误 如何处理 某些请求统一携带token 并且统一跳转到登录页面呢**

![image-20250124155512858](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124155512858.png)

注意defineStore返回的是函数

注意接收的变量名取名字是有要求的 ：useTokenStore 以==use开头== ==Store结尾==

**一般都要在main.js 中使用这个模块技术 像router app 或者pinia 都是这样** 



用户在输入框中输入内容时，浏览器通常会根据用户的历史记录或保存的表单数据，自动显示一个下拉列表，提示之前输入过的内容。`autocomplete="off"` 可以禁用这种行为。







![image-20250124195902764](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124195902764.png)



**像携带token 这种重复性操作可以放到请求拦截器中 （像一下这样就比较麻烦了）**

响应头也有好多键值对啊 

![image-20250124201131934](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124201131934.png)

~~~java
//定制请求的实例

//导入axios  npm install axios
import axios from 'axios';
//定义一个变量,记录公共的前缀  ,  baseURL
//const baseURL = 'http://localhost:8080';
const baseURL = '/api';
const instance = axios.create({ baseURL })

import {useTokenStore} from '@/stores/token.js'
//配置请求拦截器
instance.interceptors.request.use(
    (config)=>{
        //请求前的回调
        //添加token
        const tokenStore = useTokenStore();
        //判断有没有token
        if(tokenStore.token){
            config.headers.Authorization = tokenStore.token
        }
        return config;
    },
    (err)=>{
        //请求错误的回调
        Promise.reject(err)
    }
)
~~~

在 Axios 中，`config` 是一个 **请求配置对象**，它包含了当前请求的所有配置信息。当你使用 Axios 发送请求时，Axios 会根据 `config` 中的配置来构建 HTTP 请求。

------

#### **`config` 的常见属性**

以下是 `config` 对象中常见的属性：

| 属性名            | 类型      | 说明                                                  |
| :---------------- | :-------- | :---------------------------------------------------- |
| `url`             | `string`  | 请求的 URL。                                          |
| `method`          | `string`  | 请求方法（如 `get`、`post`、`put`、`delete` 等）。    |
| `headers`         | `object`  | 请求头信息（如 `Content-Type`、`Authorization` 等）。 |
| `params`          | `object`  | URL 参数（用于 `GET` 请求）。                         |
| `data`            | `object`  | 请求体数据（用于 `POST`、`PUT` 等请求）。             |
| `timeout`         | `number`  | 请求超时时间（单位：毫秒）。                          |
| `withCredentials` | `boolean` |                                                       |

和==响应拦截器==一个原理

#### 响应result 和自己在后端配置的响应体result



`result` 是 Axios 的完整响应对象，包含了服务器返回的所有信息。它的常见属性如下：

| 属性名       | 类型     | 说明                                                         |
| :----------- | :------- | :----------------------------------------------------------- |
| `data`       | `any`    | 服务器返回的响应体数据（通常是 JSON 对象）。                 |
| `status`     | `number` | HTTP 状态码（如 200、404、500 等）。                         |
| `statusText` | `string` | HTTP 状态文本（如 "OK"、"Not Found" 等）。                   |
| `headers`    | `object` | 响应头信息（包含服务器返回的所有 HTTP 头）。                 |
| `config`     | `object` | Axios 请求的配置信息（如请求方法、URL、请求头等）。          |
| `request`    | `object` | 生成此响应的 XMLHttpRequest 对象（在浏览器中）或 HTTP 请求对象。 |

### persist插件

![image-20250124203150075](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124203150075.png)



![image-20250124203132162](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124203132162.png)

## 动态导入相关

**打破循环依赖：** 因为模块的加载时间推迟了，可能避开了模块间的相互依赖问题。 

**循环依赖**指的是两个或多个模块相互依赖，形成一个闭环。例如：

- 模块 A 依赖模块 B。
- 模块 B 又依赖模块 A。



## 前后端数据接收问题

![image-20250124214719181](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124214719181.png)

![image-20250124214735894](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124214735894.png)

**后端以对象去接收json字符串**





**vue中注意单引号 字符串都要用单引号 养成习惯**

~~~html
 <el-button type="primary" @click="dialogVisible = true; title='添加分类' ">添加分类</el-button>
                </div>
~~~



### 动态添加响应式对象属性 扩展属性很重要 结合组件



#### 1. **初始状态**

```js
const categoryModel = ref({
  categoryName: '',
  categoryAlias: ''
});
```

- `categoryModel.value` 的初始值是：

  

  ```js
  {
    categoryName: '',
    categoryAlias: ''
  }
  ```

- 此时 `categoryModel.value.id` 是 `undefined`。

#### 2. **赋值操作**

如果你给 `categoryModel.value.id` 赋值，JavaScript 会动态添加 `id` 属性：



```js
categoryModel.value.id = 123; // 动态添加 id 属性
console.log(categoryModel.value); // 输出: { categoryName: '', categoryAlias: '', id: 123 }
```

- 赋值后，`categoryModel.value` 的结构变为：

  

  ```js
  {
    categoryName: '',
    categoryAlias: '',
    id: 123
  }
  ```



**！！！**

assignment to（赋值） constant variable（const 常量） 

### 数据模型和数据存储对象的关系

**弹层展示响应式数据： **

![image-20250124225939384](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124225939384.png)

**category是从数据库查询到的数据数组 作为数据存储的对象被渲染在页面上**

![image-20250124225911502](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20250124225911502.png)





~~~js
export const deleteCategoryService =(id)=>{
  return request.delete('/category?id=' + id)
  // queryString
}
// 拼接和模板字符串 js基础语法
export const deleteCategoryService = (id) => {
  return request.delete(`/category?id=${id}`);
};
~~~



**通过函数的传参的参数复用函数 实现不同逻辑**

~~~html
  <el-form-item>
                    <el-button type="primary" @click="addArticle('已发布')">发布</el-button>
                    <el-button type="info" @click="addArticle('草稿')">草稿</el-button>
                    <!-- 简单优化 通过函数传参的方式复用逻辑 -->
                </el-form-item>
~~~



---

​	

~~~js
 库中的 createApp 函数
import { createApp } from 'vue'

// 2. 引入根组件 App.vue
import App from './App.vue'

// 3. 创建 Vue 应用实例
const app = createApp(App)

// 4. 挂载到页面中的 #app 节点
app.mount('#app')
~~~

**优点： 将创建实例进行了封装 ， 保证每个实例的独立封闭性 （大型项目中更有所体会）**



## 组合式API



![image-20241103134754247](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103134754247.png)

~~~js
<script setup>
// setup 执行时机比beforeCreate早，获取不到this
   / **vue3 不太注重使用this**
    const count = 8
    const getCount = () => count
</script>
~~~

###  **reactive 和 ref 响应式**

## ![image-20241103135414724](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103135414724.png) 

![image-20241103135425234](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103135425234.png)

**const list = ref( [ ] )**

**本质就是将简单数据类型包成复杂数据类型然后 使用reactive 实现响应式**

**注意 ； 脚本中访问数据 需要通过.value 而在 template 中不需要（本质是通过扒了一层也就是解构了一层**）

==ref 可以替换掉 reactive==



### computed

在 Vue 中，`computed` 计算属性==返回==的是**基于它依赖的响应式数据计算出的值**。这些计算属性通常用于对数据进行**派生**或**处理**，并且具有**缓存**特性，只有当其依赖的数据发生变化时才会重新计算

#### vue2 说明

~~~js
<div id="app">
  <p>First Name: <input v-model="firstName"></p>
  <p>Last Name: <input v-model="lastName"></p>
  <p>Full Name: {{ fullName }}</p>  <!-- 使用 computed 计算得到 fullName -->
</div>

<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
<script>
  new Vue({
    el: '#app',
    data: {
      firstName: 'John',
      lastName: 'Doe'
    },
    computed: {
      // 定义一个计算属性 fullName
      fullName() {
        // fullName 是基于 firstName 和 lastName 计算出来的
        return this.firstName + ' ' + this.lastName;
      }
    }
  });
</script>
~~~

### vue3 说明

~~~JS
<script setup>
// setup 执行时机比beforeCreate早，获取不到this
import { ref } from 'vue'
import { reactive } from 'vue'
import { computed } from 'vue'
    const count = ref(8) 
    const obj = reactive({
      name: '张三',
      age: 20
    })
    const getCount = () => count
    const list = ref([1,2,5,8,6,8,8,9,6])
    const getEven = computed( () => list.value.filter(item => item % 2 === 0))
    
    

</script>
<template>
  <div>
    <ul>
      <li v-for="item in getEven">{{item}}</li>
    </ul>
  </div>
</template>
<style scoped>

</style>
~~~

**注意 ； computed 是只读的 如果想修改 （查看拓展方法 ） （）=> 查看官方文档！！！**

！！first and foremost 看文档最最重要

## WATCH (监听)

![image-20241103141757476](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103141757476.png)`



![image-20241103142533465](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103142533465.png)`

 

![image-20241103142638192](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103142638192.png)`

**注意是数组**

#### 配置项 immediate deep 深度监视

原理效果还是一样只是写法不一样了

![image-20241103143359043](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103143359043.png)

**deep写法是为了能够监视到复杂数据类型的变化**（watch默认是==浅层监视==）

但是这个只能监听整体 

**如果要实现监听复杂数据类型中具体的成员呢**



![image-20241103143907139](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103143907139.png)

![image-20241103144228075](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103144228075.png)



## 生命周期函数

选项式 vue2 



![image-20241103144403939](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103144403939.png)

![image-20241103144724912](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103144724912.png)

**生命周期函数可以执行多次，并不会冲突就按照顺序执行**



## 父子通信

**父传子**

![image-20241103145955084](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103145955084.png)

**带冒号是因为传的是变量**

**子传父**

![image-20241103151506147](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103151506147.png)

**数组中写可以触发的事件**

## 模板引用

![image-20241103151757075](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103151757075.png)

**必须要等dom渲染完才可以绑定上**

**使用生命周期钩子函数**

![image-20241103152739480](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103152739480.png)

**获取模板引用 的时机是等组件挂载完毕**

**拿组件一般就是为了拿里面的属性或是方法**

 

![image-20241103152535598](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103152535598.png)

**显式暴露出组件内部的属性和方法**

## provide  & inject （用到再看）

  ![image-20241103161628931](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103161628931.png)



![image-20241103162059521](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103162059521.png)

![image-20241103162115648](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103162115648.png)

**顶层与底层数据交互**



如果要==修改==变量

![image-20241103162322808](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103162322808.png)

![image-20241103162330105](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103162330105.png)



# Pinia（最重要）

**替代vuex 状态管理工具**

![image-20241103162644559](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103162644559.png)

* vue2 中 smartShop 管理 vuex

**component 组成部分  组件 成分的**

**main.js 入口文件**

~~~js
import './assets/main.css'// 导入 main.css 文件
import { createPinia } from 'pinia' // 导入 createPinia
import { createApp } from 'vue' // 导入 createApp
import App from './App.vue' // 导入 App.vue 组件
const pinia = createPinia() // 创建 pinia 实例
const app = createApp(App) // 创建 vue 实例
app.use(pinia).mount('#app') // 挂载到 id 为 app 的元素上

~~~

## pinia 基本语法

**创建各个仓库模块 （本质都是为了更好维护）**

**定义store 有两种 选项式和组合（compositon）式  <=(这个用到的多)**  

---

### 数据的定义和获取

==仓库模块的定义==：

~~~js
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// defineStore 函数的第一个参数是 store 的名字
export const useCounterStore = defineStore('counter', () => {
  -----------------------------------------
    // 声明数据 state
  const count = ref(100)
  const msg = ref('hello pinia')
  const increment = () => {
    count.value++
  }
  ------------------------------------------
    // 声明操作数据的方法 aution
  const decrement = () => {
    count.value--
  }
  ------------------------------------------
  const double = computed(() => {
    return count.value * 2
  })
    //声明基于数据派生的计算属性 getters
  ------------------------------------------
    // 最后 return  一个对象
    // 要记住暴露出去
    return {
      count,
      msg,
      increment,
      decrement,
      double

    }
})
// 仓库返回的是一个函数
~~~

==仓库模块的导入使用==：

~~~js
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
~~~



**数据的修改 基于方法 ： 详细见上**

==易错==

**注意问题：**

`double` 是一个计算属性，不应该用作事件处理器。请确保您只使用它来显示值，而不将其作为按钮的事件处理器。

~~~js
js <button @click="counter.double">Double</button>
//这样是不对的
~~~

**{{counter.double}} 要这样用**



## action 异步实现

**key：支持异步的写法注意** 

![image-20241103180150771](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103180150771.png)

![image-20241103180305981](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241103180305981.png)



### 



## storeToRefs 方法、



### `storeToRefs` 的作用

1. **将响应式状态转换为引用**：
   `storeToRefs` 可以将 Pinia store 中的响应式数据转换为普通的引用（ref），这使得在 `<template>` 中使用它们时更加方便。
2. **避免解构带来的响应性丢失**：
   当你直接解构响应式对象的属性时，Vue 会失去对这些属性的响应性，因为解构会创建一个新的非响应式变量。使用 `storeToRefs` 可以避免这种情况，确保在模板中引用的变量仍然是响应式的。

==review 复习es6 解构用法==





## pinia 持久化

提供了插件 无需使用==localStorage==



## 事件冒泡

事件冒泡是指当一个事件在某个元素上触发时，该事件会向上传播到其父元素，直到 document 对象。这个过程允许父元素对子元素的事件做出反应。

### 事件冒泡的影响

在你的代码中，事件冒泡可能导致点击事件在多个元素上触发。例如，如果你在一个列表项的子元素上点击删除按钮，而没有阻止事件冒泡，点击事件可能会传播到列表项本身或其他父元素上，导致意外的行为。

### 如何事件冒泡可能导致问题

多次触发事件：如果父元素也有事件监听器，事件冒泡可能导致这些监听器被意外触发。

2. 意外删除多个任务：如果 del 方法绑定在一个父元素上，而不是直接在删除按钮上，事件冒泡可能导致多个任务被删除。

### 如何防止事件冒泡

你可以使用 event.stopPropagation() 来阻止事件冒泡：

```js
methods: {
    del(id, event) {
        event.stopPropagation(); // 阻止事件冒泡
        this.list = this.list.filter(item => item.id !== id);
        this.updateLocalStorage();
        if (this.list.length === 0) {
            setTimeout(() => {
                alert("Today's plans are already completed");
                this.$refs.inp.focus();
            }, 200);
        }
    }
}
```

# 注意事项

## positon 

**子绝父相 ： 儿子会去往上找已经定位（不止是相对定位）的父亲 根据它父亲的位置定位自己的位置**

 相对定位是相对自己 不会脱离文档流

**绝对定位会脱离文档流**

## to-do-list 项目bug



![image-20241109134810164](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241109134810164.png)

解决方案：
~~~js
add() {
    if (this.value.length == 0) {
        alert("Your input is empty");
        this.$refs.inp.focus();
    } else {
        // 使用时间戳 + 随机数生成唯一 ID
        const newId = Date.now() + Math.random().toString(36).substr(2, 9);
        this.list.push({ 
            id: newId, 
            name: this.value, 
            editing: false 
        });
        this.updateLocalStorage();
        this.value = "";
    }
}
~~~

~~~js
del(id, event) {
    // 阻止事件冒泡
    if (event) {
        event.stopPropagation();
    }
    
    // 找到要删除的项的索引
    const index = this.list.findIndex(item => item.id === id);
    if (index > -1) {
        // 只删除找到的那一项
        this.list.splice(index, 1);
        this.updateLocalStorage();
        
        if (this.list.length === 0) {
            setTimeout(() => {
                alert("Today's plans are already completed");
                this.$refs.inp.focus();
            }, 200);
        }
    }
}
~~~

~~~js
<li v-for="(item,index) in list" :key="item.id">
    <!-- ... -->
    <i @click.stop="del(item.id, $event)">
        <svg><!-- ... --></svg>
    </i>
</li>
~~~

---



类比java 当事件一旦发生了 就会产生这个事件对象

### `$event` 是什么？

在 Vue.js 中，`$event` 是一个特殊的变量，它代表事件处理函数中被触发的原生 DOM 事件对象。通过将 `$event` 作为参数传递给方法，你可以在方法中访问事件对象的属性和方法，比如鼠标点击的位置、按下的键等

---



### 为什么需要 `:key`？

1. **提升性能**：当 Vue 通过 `v-for` 渲染一个列表时，如果没有使用 `:key`，Vue 会倾向于用一种简单的方式更新 DOM：比如直接替换整个列表。这可能导致不必要的 DOM 操作，降低性能。
2. **保持组件状态**：如果列表中的项目是组件，使用 `:key` 可以确保组件在重新排序或改变时保持其内部状态，而不会因为 DOM 节点的替换而丢失状态。
3. **正确的 DOM 更新**：当列表项发生增删改时，`:key` 可以帮助 Vue 精确地识别哪些元素需要被更新或重用。这对于动画处理和保持用户输入状态特别重要。

---



1. `this.$refs.container.classList.toggle('mirror', true)`：
   - 这行代码会在 `this.$refs.container` 所指向的 DOM 元素上添加 `'mirror'` 类。
   - `classList.toggle` 方法的第二个参数是 `true`，表示无论 `'mirror'` 类是否已经存在，都会确保这个类被添加到元素上。
2. `this.$refs.container.classList.toggle('container', false)`：
   - 这行代码会在 `this.$refs.container` 所指向的 DOM 元素上移除 `'container'` 类。
   - `classList.toggle` 方法的第二个参数是 `false`，表示无论 `'container'` 类是否已经存在，都会确保这个类被从元素上移除。

总结来说，这段代码的作用是：确保 `this.$refs.container` 上有 `'mirror'` 类，并且没有 `'container'` 类。ai1
