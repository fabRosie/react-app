import React, { Component } from 'react'
// 导入axios
import axios from 'axios'
// 导入样式
import './css/03-communination.css'

// 调度中心
const bus = {
  list: [],
  subscribe(callback) {
    this.list.push(callback)
  },
  publish(value){
      this.list.forEach(callback => {
        callback && callback(value)
      });
  }
}

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      filmList: [],
    }
    axios.get(`/test.json`).then(res => {
      this.setState({
        filmList: res.data.data.films
      })
    })
  }
  render() {
    return (

      <div>

        {
          this.state.filmList.map(item =>
            <FilmItem key={item.filmId} {...item} ></FilmItem>
          )
        }

        <FilmDetail ></FilmDetail>
      </div>


    )
  }
}

/*受控组件*/
// 影院卡片
class FilmItem extends Component {
  render() {
    let { name, poster, grade, synopsis } = this.props
    return (
      <div className="filmitem" onClick={() => {
        console.log(synopsis)
        bus.publish(synopsis)
      }}>
        <img src={poster} alt={name} />
        <h4>{name}</h4>
        <div>观众评分：{grade}</div>
      </div>
    )
  }
}


// 影院信息
class FilmDetail extends Component {
  constructor(){
    super()
    this.state={
      info:''

    }
    bus.subscribe((value)=>{
      this.setState({
        info:value
      })
    })
  }
  render() {
    return (
            <div className="filmdetail">
              {this.state.info}
            </div>

    )
  }
}