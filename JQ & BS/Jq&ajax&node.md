**注意es6特性！！！**



# jQuery

框架：简化原生js的复杂性

使用脚本库（lib）类似插件 

**!** 主要用于**dom操作**的**事件处理**

## 基础选择器 

核心 ：$("")里面一定要是字符串

![919e37b64f69f702f51060e5624ed91](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/919e37b64f69f702f51060e5624ed91.jpg)

**简化了**dom获取元素！

了解原生 JavaScript 可以让你编写自定义功能或插件来扩展框架的能力

**使用jquery框架的方法 有可能不能使用原生js的方法来使用！！！**



## 层次选择器



![64224e08c462cdb629f5bd45c309cc9](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/64224e08c462cdb629f5bd45c309cc9.jpg)

![image-20241020211119711](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020211119711.png)

**后两个和前两个对应逻辑类似 只不过后两个是对于兄弟结点的！！！**

## 表单选择器

![a16db7a23f85185abe208f068ba22ca](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/a16db7a23f85185abe208f068ba22ca.jpg)

## DOM操作

### 操作元素的属性

#### 属性分类：

元素的固有属性、自定义属性、返回值是boolean的属性（e.g. checked、selected、disabled）

#### 属性操作

**1.获取属性：attr（）/ prop（） 括号里”属性名“**

![9789e71aaa71d6a5a53acc5827dc1e4](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/9789e71aaa71d6a5a53acc5827dc1e4.jpg)

**2.设置属性：**

![image-20241019203018450](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019203018450.png)

**3.移除属性：**

![image-20241019203108161](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019203108161.png)





反正属性值是boolean类型的时候就要使用prop!



### 操作元素的样式

**增删改查**

![image-20241019203338038](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019203338038.png)

**样式名 不加.的**

**具体实例！**

![image-20241019203414678](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019203414678.png)



## 操作元素的内容

![image-20241019203509550](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019203509550.png)

区别：对于表单元素（value）和非表单元素

## 创建元素和添加元素

**分为子级追加和同级追加！**

![](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/8156a15d7eaa46b6376738087305e93.jpg)

**e.g.**

**创建元素：$("标签")**



**注意点：**



![image-20241019203757102](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019203757102.png)

**所以要 $ (“tagstring”) 转化为 jquery 对象！！**才可使用**jquery**方法

![s](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/15b2a6ab61258e8bc48b4e987149dd4.jpg)

**删除元素：**

![image-20241019204031583](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019204031583.png)



## 元素的遍历

**类似原生js的foreach==和map有什么区别如何使用？==**

---



![image-20241019204106919](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019204106919.png)

# Jquey 事件

## ready加载事件（预加载事件）

>  **类似于js中的load！**
>
> 也就是当页面dom结构加载完成后执行

由于代码是==从上到下==执行的如果==dom对象/jquery对象== 还没 **渲染** 就**调用或者操作**的话就会==报错==

**所以可以使用预加载事件 让他在dom加载出来后调用（call）/操作**

![d14bad12fb33d1fba1b91d7575d77e6](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/d14bad12fb33d1fba1b91d7575d77e6.jpg)

**将 操作 放入预加载事件的回调函数中！！**

**写到body靠后的位置 避免出现问题！！！**

**==注意：如果是字符串类型一定要加双引号！==**

# Jquery 绑定事件

### 1.绑定单个事件

#### （1）bind绑定

#### （2）直接绑定

==**style=“key：value” 填写键值对**==

![c13d1076ae9699fa55ec7233e43e246](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/c13d1076ae9699fa55ec7233e43e246.jpg)



| 方法名                            | 描述                                   |      返回类型       |
| :-------------------------------- | :------------------------------------- | :-----------------: |
| `document.getElementById`         | 通过元素的ID获取单个元素               | `Element` 或 `null` |
| `document.getElementsByClassName` | 通过类名获取元素集合                   |  `HTMLCollection`   |
| `document.getElementsByTagName`   | 通过标签名获取元素集合                 |  `HTMLCollection`   |
| `document.querySelector`          | 获取与选择器匹配的第一个元素           | `Element` 或 `null` |
| `document.querySelectorAll`       | 获取与选择器匹配的所有元素             |     `NodeList`      |
| `element.getElementsByClassName`  | 从特定元素的后代中获取元素集合         |  `HTMLCollection`   |
| `element.getElementsByTagName`    | 从特定元素的后代中获取元素集合         |  `HTMLCollection`   |
| `element.querySelector`           | 从特定元素的后代中获取第一个匹配的元素 | `Element` 或 `null` |
| `element.querySelectorAll`        | 从特定元素的后代中获取所有匹配的元素   |     `NodeList`      |

对于**直接绑定**

![aa55d371a225ee077ea94fa50932902](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/aa55d371a225ee077ea94fa50932902.jpg)

![29e29482ad050b388cd3550d72c5973](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/29e29482ad050b388cd3550d72c5973.jpg)

### review ：注意匿名函数和箭头函数的区别

**注意this的使用** 及其**指涉**

### 同时为多个事件绑定（函数： 操作）

![c2689e9158f7946d9396b49a5e76fb1](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/c2689e9158f7946d9396b49a5e76fb1.jpg)

## **Jquery ajax**

![image-20241020163031688](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020163031688.png)

**关键词 ： 异步 &&无刷新（局部刷新）（数据更新/改变时不用刷新页面）**

以下为json数据格式的例子：



![image-20241019214433995](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019214433995.png)



*XML类似于html

## 使用 ： 

格式：$.ajax({键值对})

![image-20241020161933714](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020161933714.png)

例子：

![image-20241020161951877](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020161951877.png)

## 类似于axios

data形参就是result -->返回的数据

**review : json.parse(data)  将json格式的字符串转化为对象（数组）**

![image-20241020162650006](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020162650006.png)

如果已经是json文件的话就说明不是字符串格式的了

## 渲染操作！！！



![image-20241020162926707](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020162926707.png)

## **review**: 模板字符串

`<li>${user.userName}</li>`

**review ： DOM 元素 （body是否是默认的DOM元素？）**



## get post getJSON 方法

![image-20241020163115087](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020163115087.png)

**post需要填写的是服务器地址**

![image-20241020163119865](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020163119865.png)

---

# Bootstrap

==方法论 ： 先大概有个了解，快速入门 然后结合[官方文档](https://getbootstrap.com/docs/5.3/getting-started/introduction/)学习==



**响应式、自定义、==组件==化、兼容性！**

**媒体查询尺寸表**

![image-20241019204416866](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241019204416866.png)

## 注意问题！

![image-20241020163707219](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020163707219.png)

## 布局容器



![image-20241020163715281](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020163715281.png)

## （重点） 栅格系统---> 响应式布局

![image-20241020163804972](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020163804972.png)

**注意：有默认的padding**

**方法论：对于有些框架使用失败或是不懂如何使用 ： 查文档！！！**





## 列嵌套

![image-20241020164433753](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020164433753.png)

## 列偏移

![image-20241020164516201](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020164516201.png)

## 列排序

![image-20241020164522396](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020164522396.png)

## 响应式工具（隐藏&&可视化）

![image-20241020164534325](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020164534325.png)



## components

**key:****使用类堆砌**!

**xs sm md lg** 

type : commit 表单提交按钮

type ：button 普通按钮

## nav 导航栏部分



toggl**er** **触发器**

![image-20241020193730361](https://cdn.jsdelivr.net/gh/kasahuki/os_test@main/img/image-20241020193730361.png)

# webPack or vite 

**构建工具 打包工具**



# nodeJS (?)



