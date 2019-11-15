/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 14:57:06
 * @LastEditTime: 2019-09-29 16:47:09
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Child1 from './Child1'
import Child2 from './Child2'
import axios from 'axios'
class Life extends Component {
    constructor(){
        super()
        console.log('constructor')
        this.state={
            msg:'hello',
            a:'a',
            b:'b'
        }
    }
    componentWillMount() {
        console.log('componentWillMount', document.getElementById('demo'))
        // 前端调接口
        axios.get('/list').then(({data})=>{
            console.log(data)
        })
    }
    render() {
        console.log('render', this)
        return (
            <div id='demo'>
                <h1>生命周期{this.state.msg}</h1>
                <button onClick={()=>{
                    this.setState({
                        msg:'world'
                    })
                }}>改变</button>
                <Child1 a={this.state.a}/>
                <Child2 b={this.state.b}/>
            </div>
        );
    }
    componentDidMount() { //调接口
        console.log('componentDidMount', document.getElementById('demo'))
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate',nextState)
        if(nextState.msg===this.state.msg){//两次没有变化
            return false
        }
        return true
    }
    componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
}

export default Life;