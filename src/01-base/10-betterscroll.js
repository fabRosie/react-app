import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
  state = {
    list: []
  }
  render() {
    return (
      <div>
        <button onClick={() => this.getData()}>getData</button>

        <div className="wrapper" style={{ backgroundColor: 'pink', height: '100px', overflow: 'hidden' }}>
          <ul className="content">
            {
              this.state.list.map((item) => <li key={item}>{item}</li>)
            }
          </ul>
        </div>
      </div>

    )
  }
  getData() {
    let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14]

    this.setState(
      {
        list: list
      },
      () => {
        console.log(this.state.list)
        new BetterScroll('.wrapper')
      }
    )
  }
}
