/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 10:44:26
 * @LastEditTime: 2019-09-29 12:18:02
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
class Child extends Component {
    render() {
        console.log(this.props)
        let {abc,fn}=this.props
        return (
            <div className='child'>
                Child:{abc}
                <button onClick={()=>{fn(11111)}}>点击</button>
            </div>
        );
    }
}
export default Child;