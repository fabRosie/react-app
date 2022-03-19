import React, { Component } from 'react'

class Child extends React.Component{
  render(){
    return <div>Child</div>
  }
}

class Navbar extends React.Component{
  render(){
    return (
    <div> Navbar
    <Child></Child>
    </div>
    )
  }
}
 function Swiper(){
   return <div>Swiper</div>
 }

 const Tabbar=()=><div>Tabbar</div>

export default class App2 extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}
