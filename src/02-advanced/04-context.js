import React, { Component } from 'react'
// 导入axios
import axios from 'axios'
// 导入样式
import './css/03-communination.css'

// 定义context
const GlobalContext = React.createContext()

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmList: [],
      info:''
    }
    axios.get(`/test.json`).then(res => {
      this.setState({
        filmList: res.data.data.films
      })
    })
  }
  render() {
    return (
      <GlobalContext.Provider value={{
        call:'打电话',
        sms:'短信',
        info:this.state.info,
        changeInfo:(value)=>{
          this.setState({
            info:value
          })
        }
      }}>

        <div>

          {
            this.state.filmList.map(item =>
              <FilmItem key={item.filmId} {...item} ></FilmItem>
            )
          }

          <FilmDetail ></FilmDetail>
        </div>

      </GlobalContext.Provider>

    )
  }
}

/*受控组件*/
// 影院卡片
class FilmItem extends Component {
  render() {
    let { name, poster, grade, synopsis } = this.props
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
            return <div className="filmitem" onClick={() => {
              value.changeInfo(synopsis)
            }}>
              <img src={poster} alt={name} />
              <h4>{name}</h4>
              <div>观众评分：{grade}</div>
            </div>
          }
        }
      </GlobalContext.Consumer>
    )
  }
}


// 影院信息
class FilmDetail extends Component {
 render() {
    return (
      <GlobalContext.Consumer>
        {
          (value) => {
            return <div className="filmdetail">
              detail-{value.info}
            </div>
          }
        }

      </GlobalContext.Consumer>
    )
  }
}