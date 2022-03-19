import React, { Component } from 'react'


// 导入axios
import axios from 'axios'

export default class cinema extends Component {
  constructor() {
    super()
    // 状态
    this.state = {
      cinemaList: [],
      inputValue: ''
      // bacCinemaList:[]
    }
    // 请求
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=5386265',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1646991785902793535684609","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res => {
      console.log(res.data)
      this.setState({
        cinemaList: res.data.data.cinemas,
        bacCinemaList: res.data.data.cinemas
      })
      console.log(this.state.cinemaList)
    })
  }
  // 渲染
  render() {
    return (
      <div>
        {/* 输入框 */}
        <input
        type="text"
          // 监听输入框改变state里inputValue的值
          onChange={(evt) => this.setState({
            inputValue: evt.target.value
          })}
          // 输入框的值
          value={this.state.inputValue}
        ></input>
        {/* 列表渲染 */}
        {
          this.handleCinemaList().map((item) =>
            <dl key={item.cinemaId}>
              <dt>{item.name}</dt>
              <dd>{item.address}</dd>
            </dl>
          )
        }
      </div>
    )
  }
  // 返回需要渲染在页面上的列表数据
  handleCinemaList = () => {
    const newValue=this.state.inputValue.toUpperCase()
    return this.state.cinemaList
    .filter(
      ({name, address})=> name.toUpperCase().includes(newValue) || address.toUpperCase().includes(newValue)
      )

  }
}
