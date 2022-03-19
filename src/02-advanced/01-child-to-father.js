import React, { Component } from 'react'

class Navbar extends Component {
  render() {
    return (
      <div style={{ background: 'pink' }}>
        <h3>Navbar组件</h3>
        <button
          onClick={() => {
            this.props.handleShow()
          }}
        >show sidebar</button>
      </div>
    )
  }
}

class Sidebar extends Component {
  render() {
    return (
      <div style={{ background: 'aqua' }}>
        <h3>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
          <li>1111</li>
        </h3>
      </div>
    )
  }
}


export default class App extends Component {
  state = {
    isShow: false
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              isShow: !this.state.isShow
            })
          }}
        >Click me</button>
        <Navbar handleShow={() => {
          this.setState({
            isShow: !this.state.isShow
          })
        }}></Navbar>
        {this.state.isShow && <Sidebar></Sidebar> }
      </div>
    )
  }
}
