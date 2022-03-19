import React, { Component } from 'react'

class Box extends Component {
  shouldComponentUpdate(nextProps, nextState) { 
    if(this.props.current===this.props.index || nextProps.current === this.props.index){
      return true
    }else{
      return false
    }
   }
  render(){
    console.log('render')
    return(
      <div style={{
        width:'100px',
        height:'100px',
        border:this.props.current === this.props.index ? '1px solid red':'1px solid silver',
        margin:'10px',
        float:'left'}}
        >{this.props.index}</div>
    )
  }
}

export default class App extends Component {
  state={
    list:['01','02','03','04','05','06','07','08','09','10'],
    current:0
  }
  render() {
    return (
      <div >
        <input 
        type='number' 
        onChange={(evt)=>{
          this.setState({
            current:Number(evt.target.value)
          })
        }}
        value={this.state.current}/>
        <div style={{overflow:'hidden'}}>
        {
          this.state.list.map((item,index)=>
            <Box key={item} current={this.state.current} index={index}/>
          )
        }
        </div>
        
      </div>
    )
  }
}
