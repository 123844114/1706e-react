/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 15:14:12
 * @LastEditTime: 2019-10-10 16:01:21
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import {findDOMNode} from 'react-dom'
console.log(findDOMNode)

// function Son(){
//     return (<button >按钮</button>)
// }
class Son extends Component{
    render() {
        return (
            <button >按钮</button>
        );
    }
}

class Refs extends Component {
    
    render() {
        this.myref= React.createRef()
        return (
            <div ref='mydiv'>
                <Son ref={(q)=>{this.myref=q}}/>
                <Son ref='myson1'/>
            </div>
        );
    }
    componentDidMount(){
        console.log(this.myref)
        console.log(this.refs.myson1)

    }
}

export default Refs;