import React, { useEffect, useState, useContext } from 'react'
// 导入axios
import axios from 'axios'
// 导入样式
import './css/03-communination.css'

// 定义context
const GlobalContext = React.createContext()

export default function App() {
  const [filmList, setfilmList] = useState([])
  const [info, setinfo] = useState('')

  useEffect(() => {
    axios.get(`/test.json`).then(res => {
      setfilmList(res.data.data.films)
    })
  }, [filmList])


  return (
    <GlobalContext.Provider value={{
      call: '打电话',
      sms: '短信',
      info: info,
      changeInfo: (value) => {
        setinfo(value)
      }
    }}>

      <div>

        {
          filmList.map(item =>
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
  const value = useContext(GlobalContext)

  return <div
          className="filmitem" onClick={() => {
            value.changeInfo(synopsis)
          }}>
          <img src={poster} alt={name} />
          <h4>{name}</h4>
          <div>观众评分：{grade}</div>
        </div>
}


// 影院信息
function FilmDetail() {
  const value = useContext(GlobalContext)
  return <div className="filmdetail">
            detail-{value.info}
          </div>
}