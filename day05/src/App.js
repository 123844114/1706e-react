/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 16:39:47
 * @LastEditTime: 2019-10-12 10:32:03
 * @LastEditors: Please set LastEditors
 * 函数式组件--无状态组件
 * 类组件--有状态  有生命周期
 */
import React, { Component } from 'react';

// 定义一个函数式组件
function Son(props) {
    console.log(props)
    let msg='qqqq'
    return (
        <>
        <span>{
            props.msg
        }</span>
        <button onClick={props.changeFn.bind(null,msg)}>按钮</button>
        </>
    )
}


class App extends Component {
    state = {
        msg: 'hello'
    }
    changeFn=(v)=>{
        this.setState({
            msg:v
        })
    }
    render() {
        return (
            <Son msg={this.state.msg} changeFn={this.changeFn}/>
        );
    }
}

export default App;