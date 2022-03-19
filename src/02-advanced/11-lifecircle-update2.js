import React, { Component } from 'react'

class Child extends Component{
  state={
    title:'title'
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    console.log('component will receive props',this.props.text,nextProps.text)
    // 最先拿到父组件传来的属性，可以利用属性进行ajax或者逻辑处理
    // 把属性转化成孩子自己的状态
    this.setState({
      title:nextProps.text
    })
  }
  render(){
    return <div>
      {this.state.title}
    </div>
  }
}

export default class App extends Component {
  state={
    text:'11111111'
  }
  render() {
    return (
      <div>
        {this.state.text}
        <button onClick={()=>{
          this.setState({
            text:'2222222'
          })
        }}>click</button>
        <Child text={this.state.text}></Child>
      </div>
    )
  }
}
