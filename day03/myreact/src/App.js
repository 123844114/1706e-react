/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-30 08:54:53
 * @LastEditTime: 2019-10-09 11:56:00
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import TabBar from './components/TabBar'
import TabList from './components/TabList'
import './assets/style.scss'
import axios from 'axios'
class App extends Component {
    state={
        list:[],
        val:'',
        currentIndex:1
    }
    //按钮切换
    changeTab=(i)=>{
        // 如果选择的是‘不限’
        let {list}=this.state
        if(i===0){
            list[0].list=list.map((item,index)=>index===0?[]:item.list).flat()
        }
       this.setState({
        currentIndex:i,
        list
       }) 
    }
    render() {
        let {list,currentIndex,val}=this.state
        console.log(val)
        return (
            <div className='tab'>
                <input type='text' value={val} onChange={
                    (event)=>{
                        console.log(event.target.value)
                        this.setState({
                            val:event.target.value
                        })
                    }
                }/>
                <TabBar list={list} currentIndex={currentIndex} changefn={this.changeTab}/>
                <TabList list={list.length&&list[currentIndex].list}/>
            </div>
        );
    }
    componentDidMount(){
       axios.get('/list').then(({data})=>{
        //    console.log(data.data)
           this.setState({
               list:data.data
           })
       }) 
    }
}

export default App;
