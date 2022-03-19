import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  state={
    name:'rosie'
  }
  render() {
    console.log('render')
    return (
      <div>
        <h3>{this.state.name}</h3>
        <button onClick={()=>{
          this.setState({
            name:'yyj'
          })
        }}>click</button>
      </div>
    )
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   if(JSON.stringify(this.state) !== JSON.stringify(nextState)){
  //     return true
  //   }else{
  //     return false
  //   }
  // }
  componentDidUpdate(){
    console.log('update')
  }
}
