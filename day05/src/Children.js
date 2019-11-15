/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 14:45:29
 * @LastEditTime: 2019-10-11 14:57:24
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Son extends Component {
    render() {
        console.log(this.props)

        return <>
            <p>
                {this.props.children}
            </p>
        </>
    }
}

class Children extends Component {
    render() {
        return (
            <>
            <Son title='nihao'>
                <span>helloworl</span>
                <span>helloworl</span>
                <span>helloworl</span>
                <span>helloworl</span>
            </Son>
            <Son title='nihao'>
                <input />
            </Son>
            {/* <Son b={<b>你好</b>}></Son> */}
            </>
        );
    }
}

export default Children;
