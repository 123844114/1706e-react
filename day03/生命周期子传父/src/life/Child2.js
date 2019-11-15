/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 15:46:53
 * @LastEditTime: 2019-09-29 16:16:12
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Child2 extends Component {
    render() {
        console.log('b-render')    
        return (
            <div>
                {this.props.b}
            </div>
        );
    }
}

export default Child2;