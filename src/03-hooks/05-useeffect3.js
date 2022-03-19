import React, { Component,useEffect } from 'react'

function Child(){
  useEffect(() => {
    window.onresize=()=>{
      console.log('resize')
    }
    const timer = setInterval(() => {
      console.log('111')
    }, 1000);
    
    return ()=>{
      console.log('组件销毁')
      window.onresize=null
      clearInterval(timer)
    }
    
  }, [])
  return <div>
      Child
    </div>
}

// class Child extends Component{
//   componentDidMount() { 
//     window.onresize=()=>{
//       console.log('resize')
//     }
//     this.timer=setInterval(() => {
//       console.log('111')
//     }, 1000);
//    }
//   componentWillUnmount() {
//     console.log('unamount')
//     window.onresize=''
//     clearInterval(this.timer)
//    }
//   render(){
//     return <div>
//       Child
//     </div>
//   }
// }

export default class App extends Component {
  state={
    isCreated:true
  }
  render() {
    return (
      <div>
        <button onClick={(()=>{
          this.setState({
            isCreated:!this.state.isCreated
          })
        })}>Click</button>
        {
          this.state.isCreated && <Child></Child>
        }
      </div>
    )
  }
}
