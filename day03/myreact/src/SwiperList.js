/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 15:37:32
 * @LastEditTime: 2019-10-09 16:32:10
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
class SwiperList extends Component {
    state = {
        swiperData: []
    }
    render() {
        let { swiperData } = this.state
        console.log(swiperData)
        return (
            <>
            <div className='tabbar'>
                {
                    swiperData.map((item,index)=>{return <span key={index} onClick={
                        ()=>{
                            console.log(index)
                            this.swiper.slideTo(index+1)
                        }
                    }>{item.title}</span>})
                }
            </div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        swiperData.map((item, index) => <div className="swiper-slide" key={index}>
                            <img src={`./images/${item.image}`} />
                            <p>{item.title}</p>
                        </div>)
                    }
                </div>
            </div>
            </>
        );
    }
    componentDidMount() {
        axios.get('/swiper').then(({ data }) => {
            this.setState({
                swiperData: data.data
            }, () => {
               this.swiper= new Swiper('.swiper-container', {
                    direction: 'horizontal', // 垂直切换选项
                    loop: true,
                    // autoplay:true
                })
            })
        })
    }
}

export default SwiperList;