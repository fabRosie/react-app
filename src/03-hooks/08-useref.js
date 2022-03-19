import React,{useState,useRef} from 'react'

export default function App() {

  const inputText = useRef()

  const [list, setlist] = useState(['aaa','bbb','ccc'])
  return (
    <div>
      <input ref={inputText} 
      ></input>
      <button onClick={()=>{
        setlist([...list,inputText.current.value])
        inputText.current.value=''
      }}>add</button>

      <ul>
        {
          list.map((item,index)=>
            <li key={item}>
              {item}
              <button onClick={()=>{
                console.log(index)
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
