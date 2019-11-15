/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 10:46:48
 * @LastEditTime: 2019-10-12 11:01:14
 * @LastEditors: Please set LastEditors
 * 遮罩层
 */
import React, { Component } from 'react';

class Dialog extends Component {
    render() {
        return (
            <div className='dialog'>
                <span className='close' onClick={this.props.closeFn}>&times;</span>
                {this.props.children}
            </div>
        );
    }
}

export default Dialog;