/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 10:19:40
 * @LastEditTime: 2019-10-10 10:37:29
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import LazyLoad from 'react-lazyload'
import axios from 'axios'
class MyLazyLoad extends Component {
    state = {
        list: []
    }
    render() {
        return (
            <div className='mylazy'>
                {
                    this.state.list.map((item, index) => (
                        <div className='item'>
                            <LazyLoad key={index} debounce={500} placeholder={<p>loading</p>}>
                                <img src={`./images/${item.image}`} />
                            </LazyLoad>
                        </div>
                    ))
                }
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

export default MyLazyLoad;