import React, { Component } from 'react'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "react",
      isLiked: true
    }
  }
  // state = {
  //   name: "react",
  //   isLiked: true
  // }

  // 要渲染的列表数据
  list = [
    {
      id: 1,
      text: '111'
    },
    {
      id: 2,
      text: '222'
    },
    {
      id: 3,
      text: '333'
    },
  ]

  myref=React.createRef()


  handleLiked() {
    console.log('收藏状态变化')
    this.setState({
      isLiked: !this.state.isLiked
    })
  }
  render() {
    return (
      <div>
        <h1>欢迎来到{this.state.name}的世界</h1>
        <button onClick={() => this.handleLiked()}>
          {this.state.isLiked ? '❤收藏' : '♡取消收藏'}
        </button>

        <div>
        <input ref={this.myref}></input>
        <button onClick={() => console.log('click',this.myref.current.value)}>add</button>
      </div>

        <ul>
          {
            this.list.map((item) => <li key={item.id}>{item.text}</li>)
          }
        </ul>
      </div>
    )
  }
}
