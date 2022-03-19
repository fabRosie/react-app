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
          text: '111',
          isChecked:false
        },
        {
          id: 2,
          text: '222',
          isChecked:false
        },
        {
          id: 3,
          text: '333',
          isChecked:false
        },
      ],
      // 列表数据下一个id
      nextId: 4,
      // 输入框的值
      inputValue:''
    }
  }



  render() {
    return (
      <div>
        <div>
          {/* 输入框 */}
          <input
          value={this.state.inputValue}
          onChange={(evt)=>{
            this.setState({
              inputValue:evt.target.value
            })
          }}
          ></input>
          {/* 添加按钮 */}
          <button onClick={this.addList}>add</button>
        </div>

        <ul>
          {
            this.state.list.map((item, index) =>
              <li key={item.id}>
                {/* 复选框 */}
                <input 
                type="checkbox" 
                checked={item.isChecked} 
                onChange={()=>this.handleChecked(index)}></input>
                <span 
                // 富文本展示
                dangerouslySetInnerHTML={{__html:item.text}}
                // 删除样式
                style={{textDecoration:item.isChecked ? "line-through":null}}
                ></span>
                {/* 删除按钮 */}
                <button onClick={() => this.delList(index)}>del</button>
              </li>
            )
          }
        </ul>

        {/* 列表没有数据时显示“暂无待办事项” */}
        <div className={this.state.list.length === 0 ||'hidden'}>暂无待办事项</div>



      </div>
    )
  }
  // 控制复选框
  handleChecked=(index)=>{
    let newList = [...this.state.list]
    newList[index].isChecked=!this.state.list[index].isChecked
    this.setState({
      list:newList
    })
  }
  // add按钮向列表添加input输入框的内容函数
  addList = () => {
    let newList = [...this.state.list]

    newList.push({
      id: this.state.nextId,
      text: this.state.inputValue
    })
    this.setState({
      list: newList,
      nextId: this.state.nextId + 1,
      // 清空输入框
      inputValue:''
    })
    console.log(this.state.nextId, this.state.list)

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
