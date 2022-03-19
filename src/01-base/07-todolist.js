import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
  myref = React.createRef()

  constructor() {
    super()
    this.state = {
      // 渲染的列表数据
      list: [
        {
          id: 1,
          text: '111'
        },
        {
          id: 2,
          text: '222'
        },
        {
          id: 3,
          text: '333'
        },
      ],
      // 列表数据下一个id
      nextId: 4
    }
  }



  render() {
    return (
      <div>
        <div>
          <input ref={this.myref}></input>
          <button onClick={this.addList}>add</button>
        </div>

        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={item.id}>
                {/* {item.text} */}
                {/* 富文本展示 */}
                <span dangerouslySetInnerHTML={
                  {
                  __html:item.text
                  }
                  
                }></span>

                <button onClick={() => this.delList(index)}>del</button>
              </li>
            )
          }
        </ul>

        {/* 第一种方法 */}
        {/* {this.state.list.length === 0 ? <div>暂无待办事项</div> : null}  */}
        {/* 第二种方法 */}
        {/* {this.state.list.length === 0 && <div>暂无待办事项</div>} */}
        {/* 第三种方法 */}
        {/* <div className={this.state.list.length === 0 ? '' :'hidden'}>暂无待办事项</div> */}
        <div className={this.state.list.length === 0 ||'hidden'}>暂无待办事项</div>



      </div>
    )
  }

  // add按钮向列表添加input输入框的内容函数
  addList = () => {
    let newList = [...this.state.list]

    newList.push({
      id: this.state.nextId,
      text: this.myref.current.value
    })
    this.setState({
      list: newList,
      nextId: this.state.nextId + 1
    })
    console.log(this.state.nextId, this.state.list)

    // 清空输入框
    this.myref.current.value=''
  }

  // del按钮对应删除列表数据
  delList = (index) => {
    let newList = this.state.list.slice()
    newList.splice(index, 1)
    this.setState({
      list: newList
    })
    console.log(newList, this.state.list,index)
  }
}
