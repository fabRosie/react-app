import React, { Component } from 'react'

class Field extends Component {

  render() {
    return (
      <div style={{ background: 'pink' }}>

        <label>{this.props.lable}</label>

        <input
          type={this.props.type}
          lable={this.props.lable}
          onChange={(evt) => {
            this.props.onChangeEvent(evt.target.value)
          }}
          value={this.props.value}
        ></input>

      </div>
    )
  }
}

export default class App extends Component {
  state = {
    userName: localStorage.getItem('username'),
    passWord: ''
  }
  render() {
    return (
      <div>
        <h3>登录界面</h3>
        <Field
          lable="姓名:"
          type="text"
          onChangeEvent={(value) => {
            this.setState({
              userName: value
            })
          }}
          value={this.state.userName}
        ></Field>
        <Field
          lable="密码:"
          type="password"
          onChangeEvent={(value) => {
            this.setState({
              passWord: value
            })
          }}
          value={this.state.passWord}
        ></Field>

        <button onClick={() => {
          console.log(this.state.userName, this.state.passWord)
        }}>登录</button>
        <button
          onClick={() => {
            this.setState({
              userName: '',
              passWord: ''
            })
          }}
        >取消</button>
      </div>
    )
  }
}
