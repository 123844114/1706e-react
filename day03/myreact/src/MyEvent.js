/*
 * @Description: In User Settings Edit

 * @Author: your name
 * @Date: 2019-10-10 14:27:24
 * @LastEditTime: 2019-10-10 15:11:24
 * @LastEditors: Please set LastEditors
 */
import React, { Component } from 'react';
let one = { width: '300px', height: '300px' }
let two = { width: '200px', height: '200px' }
let three = { width: '100px', height: '100px' }
class MyEvent extends Component {
    render() {
        return (
            // <div className="one" onClickCapture={this.demo} style={ one }>1
            //     <div className="two"  style={ two }>2
            //         <div className="three" onClickCapture={this.demo} style={three }>3</div>
            //     </div>
            // </div>
            // <button onClick={this.demo.bind(this,2,'jim')}>按钮</button>
            <button onClick={(e)=>{ return this.demo(2,'jim',e)}}>按钮</button>
        );
    }
    demo=(...a)=>{  
        console.log(a)
    //    console.log(e.currentTarget.className) 
    //    e.stopPropagation();
    }
    componentDidMount(){
        // document.getElementsByClassName('two')[0].addEventListener('click',this.demo,true)
    }
}

export default MyEvent;