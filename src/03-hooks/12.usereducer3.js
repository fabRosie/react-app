import React, { useEffect,  useContext,useReducer } from 'react'
// 导入axios
import axios from 'axios'
// 导入样式
import './css/03-communination.css'
// 定义context
const GlobalContext = React.createContext()

const initialState={
  filmList:[],
  info:''
}

const reducer=(prevState,action)=>{
  const newState={...prevState}
  switch(action.type){
    case 'get-filmlist':
      newState.filmList=action.value
      return newState;
    case 'change-info':
      newState.info=action.value
      return newState;  
    
    default:
      return prevState
  }
}

export default function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    axios.get(`/test.json`).then(res => {
      dispatch({
        type:'get-filmlist',
        value:res.data.data.films
      })
    })
  }, [state.filmList])

  return (
    <GlobalContext.Provider value={
      {
        state,
        dispatch
      }
    }>
      <div>
        {
          state.filmList.map(item =>
            <FilmItem key={item.filmId} {...item} ></FilmItem>
          )
        }
        <FilmDetail ></FilmDetail>
      </div>
    </GlobalContext.Provider>
  )
}

/*受控组件*/
// 影院卡片
function FilmItem(props) {
  let { name, poster, grade, synopsis } = props
  const {dispatch} = useContext(GlobalContext)

  return <div
          className="filmitem" onClick={() => {
            dispatch({
              type:'change-info',
              value:synopsis
            })
          }}>
          <img src={poster} alt={name} />
          <h4>{name}</h4>
          <div>观众评分：{grade}</div>
        </div>
}


// 影院信息
function FilmDetail() {
  const {state} = useContext(GlobalContext)
  return <div className="filmdetail">
            detail-{state.info}
          </div>
}