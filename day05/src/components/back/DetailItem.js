/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 11:07:55
 * @LastEditTime: 2019-10-12 11:49:13
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import context from './context'
class DetailItem extends Component {
    render() {
        let {src,varietal,price,region,title,year,index}=this.props
        return (
            <dl  className={'items'}>
                <dt>
                    <img src={src} />
                </dt>
               <context.Consumer>
                   {
                       (detailChangeFlag)=> <dd style={{color:'#fff'}} onClick={detailChangeFlag.bind(null,index) }>&times;</dd>
                   }
               </context.Consumer>
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

export default DetailItem;