/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 10:41:03
 * @LastEditTime: 2019-09-29 12:21:39
 * @LastEditors: Please set LastEditors
 * 子传父
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './Child'
class App extends Component {
  state = {
    msg: 'App',
    v:''
  }
  fn=(v)=>{
    console.log(v)
    this.setState({
      v:v
    })
  }
  render() {
    return (
      <div>
        <h1>{this.state.v}</h1>
        <Child abc={this.state.msg} fn={this.fn}/>
      </div>
    )
  }
}

export default App;
