/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 10:24:18
 * @LastEditTime: 2019-10-12 08:44:30
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import List from './components/List'
class ToDoList extends Component {
    state = {
        value: "",
        copyList: [],//备份数据
        list1: [
            { title: "向往的生活", id: 0, undone: true },
            { title: "奔跑吧，兄弟", id: 1, undone: false },
            { title: "再见，青春", id: 2, undone: false },
            { title: "怒放的生命", id: 3, undone: false },
            { title: "生命像块石头", id: 4, undone: false }
        ],
        total: 0,
        willState: false, // 未完成
        finishState: false//已完成
    }
    componentDidMount() {
        this.copyList()
    }
    render() {
        let { total, list, value, list1, willState, finishState } = this.state;
        return (
            <div className="wrap">
                <div className="header">任务计划列表</div>
                <div className="ipt">
                    <input type="text" value={value} onChange={this.getVal} onKeyDown={this.addToList} />
                </div>
                <p className="p1">
                    总任务：{list1.length}个，已完成{this.getUndoenLength()}个 
                    <input type="checkbox" checked={willState} onChange={this.changeState.bind(null,'未完成')} />未完成
                    <input type="checkbox" checked={finishState} onChange={this.changeState.bind(null,'已完成')} />已完成
                </p>
                <List msg='hello' list1={list1} changeUndone={this.changeUndone} delFn={this.delFn}></List>
            </div>
        );
    }
    /***
     * 删除 id
     * 根据id查找对应的对象index
     * findIndex
     * 数组删除 splice(index,1)
     */
    delFn=(id)=>{
        let { list1 } = this.state
        let i= list1.findIndex(item=>item.id===id)
        list1.splice(i,1)   //改变原数组
        this.setState({
            list1
        })
        this.copyList()
    }
    /**
     * 备份数据list1
     */
    copyList = () => {
        this.setState({
            copyList: [...this.state.list1]
        })
    }
    /**
     * 统计已完成  找true
     * filter
     */
    getUndoenLength = () => {
        let { list1 } = this.state
        return list1.filter(item => item.undone).length
    }
    //获取input框的值
    getVal = (e) => {
        this.setState({  //异步函数
            value: e.target.value
        }, () => {
            console.log(this.state.value)
        })
    }
    /* 添加一条数据
    *  模拟出一个对象，
    *  push
    */
    addToList = (e) => {
        //判断回车
        if (e.keyCode === 13) {
            let obj = { title: this.state.value, id: new Date() * 1, undone: false }
            this.state.list1.push(obj)
            this.setState({}) //只是重新渲染render
            this.copyList()
        }
    }
    /**
     * 修改状态 undone
     */
    changeUndone = (index) => {
        let { list1 } = this.state
        list1[index].undone = !list1[index].undone
        this.setState({
            list1
        })
        this.copyList()
    }
    /**
     * 过滤 ‘未完成’
     * 从copyList中过滤出undone 是 false
     * 过滤 ‘已完成’
     * 从copyList中过滤出undone 是 true
     */
    changeState = (flag,e) => {
        if(flag==='未完成'){
            // 受控组件1
            this.setState({
                willState: e.target.checked
            },()=>{
                //回调函数
                this.filterState()
            })
        }else{
            // 受控组件2
            this.setState({
                finishState: e.target.checked
            },()=>{
                //回调函数
                this.filterState()
            })
        }
    }
     /**
     * 过滤 ‘未完成’
     * 从copylist中过滤出undone 是 false
     */
    filterState=()=>{
        let {willState,finishState,list1,copyList} = this.state
        if(willState===finishState){
            this.setState({
                list1:copyList
            })
        }else if(willState||finishState){
            let arr= copyList.filter(item=>willState?item.undone===false:item.undone===true)
            this.setState({
                list1:arr
            })
        }
    }

}

export default ToDoList;