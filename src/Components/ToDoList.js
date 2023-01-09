import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggle ,destory} from '../Redux/todos/todosSlice'
function ToDoList() {
    const items = useSelector((state)=>state.todos.items)
    const dispatch = useDispatch()
    const handleDestroy =(id)=>{
      if(window.confirm("Are you sure ?")){
        dispatch(destory(id))
      }
    }
  return (
    <ul className="todo-list">
        {items.map((item)=>(
            <li key={item.id} className={item.completed ?'completed':''}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={item.completed} onChange={()=>dispatch(toggle({id:item.id}))}/>
                <label>{item.title}</label>
                <button className="destroy" onClick={()=>handleDestroy(item.id)}></button>
            </div>
        </li>
        ))}
    </ul>
  )
}

export default ToDoList
