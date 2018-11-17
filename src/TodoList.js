import React, {Component} from 'react'
import 'antd/dist/antd.css'
import TodoListUI from './TodoListUI'
import store from './store/index'
import {getButtonClickAction, getInputChangeAction, getItemDeleteAction,getListData} from "./store/actionCreators";


class TodoList extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    this.state = store.getState()

    //该组件去订阅store  ，只要store的内容发生改变，下方方法便会执行
    store.subscribe(this.handleStoreChange)
  }

  render() {
    let {inputValue, list} = this.state
    //inputValue,handleInputChange,handleButtonClick,list
    //  JSX -> 通过createElement方法  ->  生成虚拟DOM（JS对象）  ->  生成真实的DOM
    //  return React.createElement('TodoListUI',{'组件的属性'},'组件的内容')   和下方的JSX语法等效，JSX更方便
    return (
        <TodoListUI
            inputValue={inputValue}
            list={list}
            handleInputChange={this.handleInputChange}
            handleButtonClick={this.handleButtonClick}
            handleItemDelete={this.handleItemDelete}
        />
    )
  }

  componentDidMount() {
    //getListData返回的是一个函数
    const action = getListData()
    store.dispatch(action)
  }

  handleItemDelete(index) {
    const action = getItemDeleteAction(index)
    store.dispatch(action)
  }

  handleButtonClick() {
    if (!this.state.inputValue) return
    const action = getButtonClickAction(this.state.inputValue)
    store.dispatch(action)
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleStoreChange() {
    // console.log('xxxxxxxxxx', 'store changed');
    //store 发生变化后，，将store的值重新设置到state中
    this.setState(store.getState())
  }

}

export default TodoList