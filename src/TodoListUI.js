import React, {Component} from 'react'
import 'antd/dist/antd.css'
import {Input, Button, List} from 'antd'

// class TodoListUI extends Component{
//   constructor(props){
//     super(props)
//   }
//
//   render(){
//     let {inputValue,handleInputChange,handleButtonClick,list,handleItemDelete} = this.props
//     return(
//         <div>
//           <Input
//               value={inputValue}
//               style={{width: 200, margin: 10}}
//               onChange={handleInputChange}
//               placeholder={'test'}/>
//           <Button type={'primary'} style={{margin: 10}} onClick={handleButtonClick}>提交</Button>
//           <List
//               bordered
//               style={{width: 200, margin: 10}}
//               dataSource={list}
//               renderItem={(item,index) => (<List.Item  onClick={()=>{handleItemDelete(index)}}>{item}</List.Item>)}
//           />
//         </div>
//     )
//   }
// }

//无状态组件（通过纯函数来实现）：：：即一个组件只有render函数，其渲染效率要高于通过类来实现的，因为通过类来实现还要执行一系列周期函数
const TodoListUI = (props) => {
  let {inputValue, handleInputChange, handleButtonClick, list, handleItemDelete} = props
  return (
      <div>
        <Input
            value={inputValue}
            style={{width: 200, margin: 10}}
            onChange={handleInputChange}
            placeholder={'test'}/>
        <Button type={'primary'} style={{margin: 10}} onClick={handleButtonClick}>提交</Button>
        <List
            bordered
            style={{width: 200, margin: 10}}
            dataSource={list}
            renderItem={(item, index) => (<List.Item onClick={() => {
              handleItemDelete(index)
            }}>{item}</List.Item>)}
        />
      </div>
  )
}

export default TodoListUI