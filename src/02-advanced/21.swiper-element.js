import React, { Component } from 'react'
import Swiper from './swiper/swiper'
import SwiperItem from './swiper/swiper-item'

export default class App extends Component {
  state = {
    list: []
  }
  componentDidMount() {
    console.log('根组件mount完成')
    setTimeout(() => {
      console.log('开始执行异步')
      this.setState({
        list: ["aaaa", "bbbb", "Cccccc", "ddddd"]
      })
      console.log('异步执行完成')
    }, 1000)

  }
  render() {
    return (
      <div>
        <Swiper>
          {
            this.state.list.map(item=>
              <SwiperItem key={item}>{item}</SwiperItem>
            )
          }
          {/* <SwiperItem>1</SwiperItem>
          <SwiperItem>2</SwiperItem>
          <SwiperItem>3</SwiperItem> */}
        </Swiper>
      </div>
    )
  }
}
