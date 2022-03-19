import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css/bundle'
// Swiper.use([Navigation, Pagination]);

export default class App extends Component {
  componentDidUpdate() {
    new Swiper('.swiper', {
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      modules: [Navigation, Pagination],
    })
    console.log('子组件mount完成')
  }
  render() {
    console.log('子组件render')
    return (

      <div>

        <div className="swiper" style={{ background: 'pink', height: '200px' }}>

          <div className="swiper-wrapper">
            {this.props.children}
          </div>
          
          <div className="swiper-pagination"></div>

        </div>

      </div>
    )
  }
}
