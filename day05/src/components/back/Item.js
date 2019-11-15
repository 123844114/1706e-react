/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:04:50
 * @LastEditTime: 2019-10-12 11:47:51
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Item extends Component {
    render() {
        let {src,varietal,price,region,title,year,changeFlag,index,flag}=this.props
        return (
            <dl  className={flag?'active items':'items'}>
                <dt>
                    <img src={src} />
                    <span className='jia' onClick={changeFlag.bind(null,index)} >+</span>
                </dt>
                <dd>
                    {title}
                    <br />
                    {price}
                    <br />
                    <button>add</button>
                </dd>
            </dl>
        );
    }
}

export default Item;