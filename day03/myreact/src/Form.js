/*
 * @Description: In User Settings Edit

 * @Author: your name
 * @Date: 2019-10-10 10:41:56
 * @LastEditTime: 2019-10-10 14:26:02
 * @LastEditors: Please set LastEditors
 */
import React, { Component,Fragment } from 'react';
class Father extends Component{
    state={
        list:[
            {flag:false,count:0,price:10},
            {flag:false,count:0,price:20},
            {flag:false,count:0,price:30}
        ],
        totalPrice:0
    }
    render(){
        let {list,totalPrice}=this.state
        return <>
            {
              list.map((item,index)=>{
                  return <p key={index}> <input type='checkbox' checked={item.flag} onChange={this.changeCheckbox.bind(null,index)}/> {item.price} <button>-</button> {item.count} <button onClick={this.add.bind(null,index)}>+</button></p>
              })  
            }
            <p>总计：{totalPrice}</p>
        </>
    }
    changeCheckbox=(index,e)=>{
        // console.log(e.target.checked)
        let {list}=this.state
        list[index].flag=e.target.checked
        this.setState({
            list  
        })
        //求和
        this.sum()
    }
    add=(index)=>{
        let {list}=this.state
        list[index].count+=1
        this.setState({
            list  
        })
        //求和
        this.sum()
    }
    // 计算总和 reduce
    sum=()=>{
        let {list}=this.state
       let total= list.reduce((total,current)=>{
            if(current.flag){
                total+=current.count*current.price
            }
            return total
        },0) 
    // let sum=0
    // list.forEach((item)=>{
    //     sum+=current.count*current.price
    // })
        this.setState({
            totalPrice: total
        })
    }
}


export default Father;