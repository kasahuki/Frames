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





# `axios 前后端交互`



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
