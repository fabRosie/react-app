import React, { Component } from 'react'

class Field extends Component {
  state={
    value:''
  }
  clear(){
    this.setState({
      value:''
    })
  }
  render() {
    return (
      <div style={{ background: 'pink' }}>

        <label>{this.props.lable}</label>

        <input
          type={this.props.type}
          lable={this.props.lable}
          value={this.state.value}
        ></input>

      </div>
    )
  }
}

export default class App extends Component {
  userName=React.createRef()
  passWord=React.createRef()

  render() {
    return (
      <div>
        <h3>登录界面</h3>

        <Field
          lable="姓名:"
          type="text"
          ref={this.userName}
        ></Field>

        <Field
          lable="密码:"
          type="password"
          ref={this.userName}
        ></Field>

        <button onClick={()=>{
          console.log(this.userName.current.state.value,this.passWord.current.state.value)
        }}>登录</button>
        <button onClick={()=>{
          this.userName.current.clear()
          this.passWord.current.clear()
        }}>取消</button>
      </div>
    )
  }
}
