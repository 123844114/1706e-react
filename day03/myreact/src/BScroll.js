/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 16:34:04
 * @LastEditTime: 2019-10-10 10:22:54
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Scroll from 'react-bscroll'
import 'react-bscroll/lib/react-scroll.css'
import axios from 'axios'
class BScroll extends Component {
    state = {
        list: []
    }
    render() {
        let { list } = this.state
        return (
            <div className='myScroll'>
                <Scroll>
                    {
                        list.map((item, index) => (<div className='item' key={index}>
                            <img src={`./images/${item.image}`} />
                        </div>))
                    }
                </Scroll>
            </div>
        );
    }
    componentDidMount() {
        axios.get('/swiper').then(({ data }) => {
            this.setState({
                list: data.data
            })
        })
    }
}

export default BScroll;