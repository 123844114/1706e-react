/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:31:47
 * @LastEditTime: 2019-10-12 11:03:12
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import Img from './Img.js';
import Dialog from './Dialog'
import DetailAll from './DetailAll'
class Compare extends Component {
    state = {
        show: false
    }
    /**
     * 关闭dialog
     */
    closeFn=()=>{
        this.setState({
            show:false
        })
    }
    render() {
        let { data } = this.props
        let {show}=this.state
        console.log(data)
        return (
            <>
                <div className='top'>
                    <Img data={data} />
                    {/* 条件渲染 */}
                    {
                        data.filter(item => item.flag).length > 1 ? <button className='btn active' onClick={() => { 
                            this.setState({
                                show:true
                            })
                        }}>compare</button> : <button className='btn'>Component</button>
                    }

                </div>
                {show && <Dialog closeFn={this.closeFn}><DetailAll data={data}/></Dialog>}
            </>
        );
    }
}

export default Compare;