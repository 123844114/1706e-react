/*
 * @Description: In User Settings Edit

 * @Author: your name
 * @Date: 2019-09-30 08:58:37
 * @LastEditTime: 2019-10-09 11:02:39
 * @LastEditors: Please set LastEditors
 */
import React, { Component,Fragment } from 'react';
import Dialog from './Dialog'
console.log(React)
class TabItem extends Component {
    state={
        show:false
    }
    // 关闭
    closeFn=()=>{
        this.setState({
            show:false
        })
    }
    render() {
        let { item } = this.props
        console.log(item)
        let { show } = this.state
        return (
            <Fragment>
                <div className='tabitem'>
                    <img src={item.img} onClick={this.open} />
                    <h3>{item.title}</h3>
                    <p><span>{item.price}</span>/普通装</p>
                    <button onClick={()=>{
                        this.setState({
                            show:true
                        })
                    }}>开始订餐</button>
                </div>
                {show&&<Dialog closeFn={this.closeFn} data={item}/>}
            </Fragment>
        );
    }
    open = () => {
        alert('打开dialog')
    }
}

export default TabItem;