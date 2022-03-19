import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

function Filmlist(props) {
  const [list, setlist] = useState([])
  useEffect(() => {
    if (props.type === 1) {
      console.log('请求正在热映的数据')
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=4284179',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1646991785902793535684609","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then((res) => {
        setlist(res.data.data.films)
      })
    } else {
      console.log('请求即将上映的数据')
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=5976457',
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1646991785902793535684609","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        setlist(res.data.data.films)
      })
    }
  }, [props.type])
  return <div>
      Filmlist-{props.type}
      <ul>
        {
          list.map((item) => <li key={item.filmId}>{item.name}</li>)
        }
      </ul>
    </div>
}

export default class App extends Component {
  state = {
    type: 1
  }
  render() {
    return (
      <div>
        <ul>
          <li onClick={() => {
            this.setState({
              type: 1
            })
          }}>正在热映</li>
          <li onClick={() => {
            this.setState({
              type: 2
            })
          }}>即将上映</li>
        </ul>
        <Filmlist type={this.state.type}></Filmlist>
      </div>
    )
  }
}
