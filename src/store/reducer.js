import {CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_ITEM, INIT_DATA} from './actionTypes'

const defaultState = {
  inputValue: '',
  list: []
}

//reducer 可以接受state，但是绝对不能修改state
//reducer是一个纯函数，给定固定的输入，就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {

  //state 操作前的值，，，，action相关动作的信息
  // console.log('xxxxxxxxxx', state, action);


  if (action.type === CHANGE_INPUT_VALUE) {

    //将原来的state的值进行一次深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type === SUBMIT_INPUT_VALUE) {

    //将原来的state的值进行一次深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(action.value)
    newState.inputValue = ''
    return newState
  }

  if (action.type === DELETE_ITEM) {

    //将原来的state的值进行一次深拷贝
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }

  if (action.type === INIT_DATA) {

    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    return newState
  }


  return state

}
