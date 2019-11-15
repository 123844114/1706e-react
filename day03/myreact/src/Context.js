/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 16:18:14
 * @LastEditTime: 2019-10-10 16:46:52
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
console.log(React.createContext)
 let {Consumer,Provider} =React.createContext({name:'张三'})
class Two extends Component {
    render() {
        return (
            <div style={{color:'red'}}>
                <Consumer>
                    {
                       (v)=>{
                           console.log(v)
                         return  <span>{v.msg}</span>
                       } 
                    }
                </Consumer>
            </div>
        );
    }
}
class One extends Component {
    render() {
        return (
            <div>
                <Two/>
            </div>
        );
    }
}
class Context extends Component {
    state={
        msg:'helloworld',
        num:0
    }
    render() {
        return (
            <Provider value={this.state}>
                <One/>
            </Provider>
        );
    }
}

export default Context;