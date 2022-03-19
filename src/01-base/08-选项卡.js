import React, { Component } from 'react'

// 导入样式
import './css/02-maizuo.css'

// 导入组件
import Film from './maizuo-component/film.js'
import Cinema from './maizuo-component/cinema.js'
import Center from './maizuo-component/center.js'


export default class App extends Component {
  state = {
    list: [
      {
        id: 1,
        text: '电影'
      },
      {
        id: 2,
        text: '影院'
      },
      {
        id: 3,
        text: '我的'
      },
    ],
    current: 0,
  }
  which() {
    switch (this.state.current) {
      case 0: return <Film></Film>
      case 1: return <Cinema></Cinema>
      case 2: return <Center></Center>
      default: return null
    }
  }
  render() {
    return (
      <div>

        {/* 组件渲染 */}
        {/* 第一种方法 */}
        {/* {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Cinema></Cinema>}
        {this.state.current === 2 && <Center></Center>} */}
        {/* 第二种方法 */}
        {
          this.which()
        }

        <ul>
          {this.state.list.map((item, index) => {
            return <li key={item.id} className={this.state.current === index ? 'active' : null} onClick={() => this.handleActive(index)}>{item.text}</li>
          }
          )}
        </ul>

      </div>
    )
  }
  handleActive(index) {
    this.setState({
      current: index
    })
  }
}
