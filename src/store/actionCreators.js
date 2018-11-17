import {CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_ITEM, INIT_DATA} from "./actionTypes";
import store from "./index";
import axios from "axios/index";


export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getButtonClickAction = (value) => ({
  type: SUBMIT_INPUT_VALUE,
  value
})

export const getItemDeleteAction = (index) => ({
  type: DELETE_ITEM,
  index
})

export const getInitData = (data) => ({
  type: INIT_DATA,
  data
})

export const  getListData = () => {
  return () => {
    axios.get('./list.json').then((res) => {
      // console.log('xxxxxxxxxx', res.data);
      const action = getInitData(res.data)
      store.dispatch(action)
    })
  }
}
