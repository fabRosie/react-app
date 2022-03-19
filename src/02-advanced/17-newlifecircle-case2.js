import React, { Component } from 'react'

export default class App extends Component {
  myref=React.createRef()
  state={
    list:[1,2,3,4,5,6,7,8,9,10]
  }
  getSnapshotBeforeUpdate(){
    const component=this.myref.current
    const height=component.scrollHeight
    console.log(this.myref.current.scrollHeight)
    return height
  }
  componentDidUpdate(prevProps,prevState,value){
    const component=this.myref.current
    const height=this.myref.current.scrollHeight
    component.scrollTop+=height-value
    
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            list:[...[11,12,13,14,15,16,17,18,19],...this.state.list]
          })
        }}>mail update</button>

        <h3>邮箱应用</h3>
        
        <div style={{height:'200px',overflow:'auto',background:'pink'}} ref={this.myref}>
          <ul>
            {
              this.state.list.map((item)=>
                <li key={item} style={{height:'100px',listStyle:'none',background:'yellow'}}>{item}</li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}
