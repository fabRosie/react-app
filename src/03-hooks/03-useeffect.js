import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function App() {
  const [list, setlist] = useState([])
  useEffect(() => {
    axios.get('/test.json').then((res)=>{
      console.log(res.data)
      setlist(res.data.data.films)
    })
  
    
  }, [])
  
  return (
    <div>
      app
      <ul>
        {
          list.map((item)=>
          <li key={item.filmId}>{item.name}</li>
          )
        }
      </ul>
    </div>
  )
}
