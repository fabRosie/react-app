import React,{useState} from 'react'

export default function App() {
  const [count, setcount] = useState(0)
  return (
    <div>
      {count}
      <button onClick={()=>{
        setcount(count+1)
      }}>Add</button>
    </div>
  )
}
