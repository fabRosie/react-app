import React,{useState} from 'react'

export default function App() {
  const [text, settext] = useState('')
  const [list, setlist] = useState(['aaa','bbb','ccc'])
  return (
    <div>
      <input 
      value={text}
      onChange={(evt)=>{
        settext(evt.target.value)
      }}
      ></input>
      <button onClick={()=>{
        console.log(text)
        setlist([...list,text])
        settext('')
      }}>add</button>

      <ul>
        {
          list.map((item,index)=>
            <li key={item}>
              {item}
              <button onClick={(index)=>{
                const newlist=[...list]
                newlist.splice(index,1)
                setlist(newlist)
              }}>del</button>
              </li>
            )
        }
      </ul>
      {!list.length && <div>暂无待办事项</div>}
    </div>
  )
}
