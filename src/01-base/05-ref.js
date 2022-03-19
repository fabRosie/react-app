import React, { Component } from 'react'

export default class Event extends Component {
  myref=React.createRef()
  render() {
    return (
      <div>
        <input ref={this.myref}></input>
        <button onClick={() => console.log('click',this.myref.current.value)}>add</button>
      </div>
    )
  }
  
}
