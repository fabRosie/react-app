import React, { Component } from 'react'

export default class App extends Component {
  state={
    count:0
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleCount}>+1</button>
      </div>
    )
  }
  handleCount=()=>{
    this.setState({
      count: this.state.count+1
    })
  }
}
