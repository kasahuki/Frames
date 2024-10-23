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



# v-model（重要）

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



# axios 前后端交互

