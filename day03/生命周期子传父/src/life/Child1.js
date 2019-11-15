/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-29 15:45:28
 * @LastEditTime: 2019-09-29 16:25:41
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Child1 extends Component {
    state = {
        msg: 'child1'
    }
    render() {
        console.log('a-render')
        return (
            <div>
                {this.props.a}
                <span>{
                    this.state.msg
                }</span>
                <button onClick={() => {
                    this.setState({
                        msg: 'child111111'
                    })
                }}>修改子组件</button>
            </div>
        );
    }
    componentWillReceiveProps(nextProps) { //旧的生命周期
        console.log('componentWillReceiveProps', nextProps)
    }
    componentWillUpdate() {
        console.log('componentWillUpdate')
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
}

export default Child1;