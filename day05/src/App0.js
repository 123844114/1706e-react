/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 08:39:19
 * @LastEditTime: 2019-10-11 15:34:00
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
// 封装原始Alert
class Alert extends Component {
    render() {
        return (
            <div className='alert'>
                {this.props.title}
            </div>
        );
    }
}

// 定义高阶组件  参数 组件 且 返回值 新组建
 function wrapWithTimer(Comp){
     // 创建新组件
     class NewCom extends Component{
         state={
             flag:true
         }
         componentDidMount(){
             setTimeout(()=>{
                 this.setState({
                     flag:false
                 })
             },2000)
         }
         render(){
             let {flag}=this.state
             // 在高阶组件中传属性
             return flag&&<Comp {...this.props}/>
         }
     }
     // 返回新组件
     return NewCom
 }

 // 通过高阶组件 得到一个新的组件
 let NewAlert = wrapWithTimer(Alert)
class App extends Component {
    render() {
        return (
            <div>
                <NewAlert title='警告' msg='hello'/>
                {/* <Alert title='提示'/> */}
            </div>
        );
    }
}

export default App;