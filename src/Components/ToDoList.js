import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggle } from '../Redux/todos/todosSlice'
function ToDoList() {
    const items = useSelector((state)=>state.todos.items)
    const dispatch = useDispatch()
  return (
    <ul className="todo-list">
        {items.map((item)=>(
            <li key={item.id} className={item.completed ?'completed':''}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={item.completed} onChange={()=>dispatch(toggle({id:item.id}))}/>
                <label>{item.title}</label>
                <button className="destroy"></button>
            </div>
        </li>
        ))}
    </ul>
  )
}

export default ToDoList
