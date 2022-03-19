import React, { Component } from 'react'

export default class App extends Component {
  state={
    text:'1111'
  }
  // componentWillUpdate(){
  //   console.log('componentWillUpdate')
  // }
  componentDidUpdate(prevProps,prevStates,value){
    console.log('componentDidUpdate',value)
  }
  getSnapshotBeforeUpdate(){
    console.log('getSnapshotBeforeUpdate')
    return {}
  }
  render() {
    console.log('render')
    return (
      <div>App
        <button onClick={()=>{
          this.setState({
            text:'2222'
          })
        }}>Click</button>
        {this.state.text}
      </div>
    )
  }
}
