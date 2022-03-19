import React, { Component } from 'react'
// 导入css样式
import './css/01-index.css'

export default class App extends Component {
  render() {
    let myname='Rosie'
    let obj1 = {
      backgroundColor:"yellow",
      fontSize:"30px"
    }
  
    return (
      <div>
        {10+20}+{myname}&nbsp;
        {10<20?'aaa':'bbb'}
        <div style={obj1}>111111111</div>
        <div style={{color:"blue"}}>22222222222</div>
        <div className="active">3333333</div>
      </div>
    )
  }
}
