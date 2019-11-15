/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 10:30:44
 * @LastEditTime: 2019-10-12 08:40:02
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types'
class List extends Component {
    //静态属性--类型校验
    static propTypes={
        list1:PropTypes.array,
        msg:PropTypes.string.isRequired
    }
    render() {
        console.log(this)
        let {list1,changeUndone,delFn}=this.props
        return (
            <div>
                <h3 className="p2">任务列表：</h3>
                <div className="bottom">
                    {
                        list1.map((item, index) => {
                            return <p key={index} className="p3">
                                <span className="left">{item.title}</span>
                                <span className="center" onClick={delFn.bind(null,item.id)} >删除</span>
                                <span className={item.undone?'right':'red'} onClick={changeUndone.bind(null,index)}>{item.undone?'已完成':'未完成'}</span>
                            </p>
                        })
                    }
                </div>
            </div>
        );
    }
}

export default List;