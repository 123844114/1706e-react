/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:05:44
 * @LastEditTime: 2019-10-12 09:43:43
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Item from './Item'
class List extends Component {
    render() {
        let {data,changeFlag}=this.props
        return (
            <div className='box-items'>
                {
                    data.map((item,index)=><Item key={index} index={index} {...item} changeFlag={changeFlag}/>)
                }
            </div>
        );
    }
}

export default List;