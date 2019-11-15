/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:59:00
 * @LastEditTime: 2019-09-30 10:02:37
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import TabItem from './TabItem'
class TabList extends Component {
    render() {
        let {list}=this.props
        console.log(list)
        return (
            <div className='tablist'>
                {
                    list&&list.map((item,index)=><TabItem key={index} item={item}/>)
                }
            </div>
        );
    }
}

export default TabList;