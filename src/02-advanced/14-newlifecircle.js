import React, { Component } from 'react'

export default class App extends Component {
  state = {
    name: 'rosie',
    age: 26
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerivedStateFromProps')
    return {
      name: nextState.name.substring(0,1).toUpperCase()+nextState.name.substring(1)
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            name: 'yyj'
          })
        }}>Click</button>
        App-{this.state.name}-{this.state.age}
      </div>
    )
  }
}
