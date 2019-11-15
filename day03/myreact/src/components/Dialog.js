/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 10:40:09
 * @LastEditTime: 2019-10-09 10:55:00
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Dialog extends Component {
    render() {
        let {closeFn,data}=this.props
        return (
            <div className='dialog'>
                <div className='body'>
                    <h3>标题 <span onClick={()=>{closeFn()}}>&times;</span></h3>
                    <div className='content'>
                        <img src={data.img}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dialog;