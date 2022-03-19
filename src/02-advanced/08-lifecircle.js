import React, { Component } from 'react'
// 导入axios
import axios from 'axios'

import BScroll from 'better-scroll'

export default class App extends Component {
  state = {
    name: 'rosie',
    list: []
  }
  componentDidMount() {
    axios.get('/test.json').then((res) => {
      console.log(res.data.data.films)

      this.setState({
        list: res.data.data.films
      })

      // new BScroll('#wrapper')
    })
  }
  render() {
    console.log('render')
    return (
      <div>
        <button onClick={() => {
          this.setState({
            name: 'yyj'
          })
        }}>Click</button>
        <h3 id="myname">{this.state.name}</h3>

        <div id="wrapper" style={{ background: 'pink', height: '200px', overflow: 'hidden' }}>
          <ul>
            {this.state.list.map((item) =>
              <li key={item.filmId}>{item.name}</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
  UNSAFE_componentWillUpdate() {
    console.log('componentWiLLUpdate', document.getElementById('myname').innerHTML)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', document.getElementById('myname').innerHTML)
    console.log(prevState.list)
    if (prevState.list.length === 0) {
      new BScroll('#wrapper')
    }
  }
}
