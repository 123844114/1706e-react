/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-11 16:18:10
 * @LastEditTime: 2019-10-11 16:27:53
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';

class Old extends Component {
    render() {
        return <div className='old'>
            {this.props.children}
        </div>
    }
}
// 定义高阶函数
function wrapWithHeader(Comp){
 return class NewComp extends Component{
     //逻辑
     render() {
         return (
             <div>
                 <header>标题</header>
                 <Comp>{this.props.children}</Comp>
             </div>
         );
     }
 }
}

// 使用

let NewOld = wrapWithHeader(Old)

class WithHeader extends Component {
    render() {
        return (
            <>
                <NewOld>
                    <form>
                        <p>姓名 <input /></p>
                    </form>
                </NewOld>
                <NewOld>
                    <table>
                        <tr><td>ff</td></tr>
                    </table>
                </NewOld>
            </>
        );
    }
}

export default WithHeader;
