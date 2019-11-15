/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:42:41
 * @LastEditTime: 2019-10-09 10:39:09
 * @LastEditors: Please set LastEditors
 */
import React,{Component} from 'react'
 
class TabBar extends Component{
    render(){
        let {list,currentIndex,changefn}=this.props
        return (
            <div className='tabbar'>
                {
                    list.map((item,index)=><span key={index} className={index===currentIndex?'active':null} onClick={changefn.bind(null,index)}>{item.name}</span>)
                }
            </div>
        )
    }
    
}

export default TabBar