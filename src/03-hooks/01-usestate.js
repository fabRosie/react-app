import React,{useState} from 'react'

export default function App() {
  const [name,setName]=useState('rosie')
  return (
    <div>
      <button onClick={()=>{
        console.log(name)
        setName('yyj')
      }}>Click</button>
      App-{name}
      </div>
  )
}
