/*
 * @Description: In User Settings Editcc
 * @Author: your name
 * @Date: 2019-10-12 10:13:15
 * @LastEditTime: 2019-10-12 10:33:35
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Img extends Component {
    render() {
        let { data } = this.props
        return (
            <div className='topimg'>
                {
                    data.length && data.filter(item => item.flag).map((item, index) => <img key={index} src={item.src} />)
                }
            </div>
        );
    }
}

export default Img;