import React, { Component } from 'react'

export default class App extends Component {
  state={
    userName:'rosie'
  }
  render() {
    return (
      <div>
        <h3>登录页</h3>
        {/* 输入框 */}
        <input type="text" value={this.state.userName} onChange={(evt)=>{
          console.log('input')
          this.setState({
            userName:evt.target.value
          })
        }}></input>
        {/* 登录按钮 */}
        <button onClick={()=>{
          console.log(this.state.userName)
        }}>登录</button>
        {/* 重置按钮 */}
        <button onClick={()=>{
          this.setState({
            userName:''
          })
        }}>重置</button>
      </div>
    )
  }
}
