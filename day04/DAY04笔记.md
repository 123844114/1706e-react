<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 08:40:39
 * @LastEditTime: 2019-10-10 16:38:44
 * @LastEditors: Please set LastEditors
 -->
# 一、效果实现
## 1. swiper 官网

## 2. react-bscroll   https://www.npmjs.com/package/react-bscroll
       
## 3. react-lazyload  https://www.npmjs.com/package/react-lazyload  必须会
   图片  组件   
   
   
## 4. 路由懒加载

# 二、表单（受控组件）
   input、textarea、select 使用value+onChange
   checkbox\radio   使用checked+onChange
# 三、 表单（非受控组件）defaultValue/defaultChecked
  课堂案例：简易购物车

# 四、react合成事件

  原生事件流：  
  （1）捕获  addEventListener(click,fn,true)
  （2）默认  冒泡 
  （3）冒泡和捕获并存，先执行捕获
   (4) 事件绑定在dom元素上
   (5) 阻止事件流 event.stopPropagation() 或者是 return false


   合成事件
   （1）只能用event.stopPropagation()阻止事件流
   （2）默认  冒泡
    (3) 事件绑定在顶层document
    (4) 默认会传event，需要接受
    (5) 提供了合成的捕获 onClickCapture
    (6) 优先执行原生事件

合成事件调用：bind中默认会传入event   箭头函数需要手动传入event

# 五 refs集合 存放所有的ref属性
  （1） ref 不要重名 
   (2) 原生dom原生上获取的是真实dom
  （3）组件上写ref，获得是组件实例
  （4）函数式组件上不可设置ref，因为函数式组件无实例
## vs findDOMNode
   (1) 即便是组件，获得也是真实的dom节点
   （2）如果是元素的话，获得也是真实的dom节点
   import {findDOMNode} from 'react-dom'
# 嵌套传值 Provider Consumer
   步骤：（1）let {Provider,Consumer}=React.creactContext()
         (2) 提供方  <Provider value={数据}>组件</Provider>
         （3）消费者  <Consumer>{ (v)=>{return dom结构}}</Consumer>
 问题：当你的组件是单独的文件的时候怎么传值？
 
  
  