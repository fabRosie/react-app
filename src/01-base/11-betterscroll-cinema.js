import React, { Component } from 'react'

// 导入axios
import axios from 'axios'

// 导入BetterScroll
import BetterScroll from 'better-scroll'

export default class cinema extends Component {
  constructor() {
    super()
    // 状态
    this.state = {
      cinemaList: [],
      bacCinemaList: []
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

      new BetterScroll('.wrapper')
    })
  }
  render() {
    return (
      <div>
        <input onInput={this.handleInput}></input>
        <div className="wrapper" style={{ backgroundColor: 'pink', height: '500px', overflow: 'hidden' }}>
          <ul className="content">
            {
              this.state.cinemaList.map((item) =>
                <dl key={item.cinemaId}>
                  <dt>{item.name}</dt>
                  <dd>{item.address}</dd>
                </dl>
              )
            }
          </ul>
        </div>

      </div>
    )
  }
  handleInput = (event) => {
    // console.log('handleInput',event.target.value)
    const inputValue = event.target.value.toUpperCase();
    let newList = this.state.bacCinemaList
      .filter(
        ({ name, address }) => name.toUpperCase().includes(inputValue) || address.toUpperCase().includes(inputValue)
      )
    this.setState({
      cinemaList: newList
    })

  }
}
