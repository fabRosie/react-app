import React, { Component } from 'react'

export default class App extends Component {
  render() {
    console.log('孙组件render')
    return (
      <div className="swiper-slide">
        {this.props.children}
      </div>
    )
  }
}
