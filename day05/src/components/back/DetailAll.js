/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 11:02:09
 * @LastEditTime: 2019-10-12 12:02:05
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import DetailItem from './DetailItem';
class DetailAll extends Component {
    render() {
        console.log('DetailAll',this.props)
        let {data}=this.props
        return (
            <div className="detailall">
                {/* 显示弹层数据 */}
                {
                    data.map((item,index)=>item.flag&&<DetailItem {...item} index={index} key={index} />)
                }
            </div>
        );
    }
}

export default DetailAll;