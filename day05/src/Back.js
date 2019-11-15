/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 08:54:35
 * @LastEditTime: 2019-10-12 11:43:53
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from "react"
import Axios from "axios"
import List from './components/back/List'
import Compare from './components/back/Compare'
// 引入上下文对象
import context from './components/back/context'
class Back extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        Axios.get('/list').then(({ data }) => {
            this.setState({
                data
            })
        })
    }
    changeFlag = (index) => {
        //修改
        let { data } = this.state
        //限定 最多3个   判断data数组中flag=true的个数
        let length = data.filter(item => item.flag).length
        // 如果本身flag是true的话，不用限制3，直接可以点
        if (data[index].flag) {
            data[index].flag = !data[index].flag
            this.setState({ data })
        } else if (length < 3) {// 否则需要限制3
            data[index].flag = !data[index].flag
            this.setState({ data })
        }
    }
    //详情页中的删除选中效果
    detailChangeFlag=(index)=>{
        debugger
        let {data}=this.state
        data[index].flag=false
        this.setState({data})
    }
    render() {
        let { data } = this.state
        return (<context.Provider value={this.detailChangeFlag}>
            <Compare data={data} />
            <List data={data} changeFlag={this.changeFlag} />
        </context.Provider>)
    }
}

export default Back;