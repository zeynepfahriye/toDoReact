import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { toggle ,destory,selectFilteredTodos} from '../Redux/todos/todosSlice'
//todosSlice içinde yazdığımız selector syaesinde buna artık gerek yok 
//let filtered =[];
function ToDoList() {
  const selectFiltered =useSelector(selectFilteredTodos)
    //const items = useSelector(selectTodos)
    //const activeFilter = useSelector((state)=>state.todos.activeFilter)
    const dispatch = useDispatch()
    const handleDestroy =(id)=>{
      if(window.confirm("Are you sure ?")){
        dispatch(destory(id))
      }
    }
    //selector sayesinde bunlara da gerek yok
    //filtered = items
    //if(activeFilter !== 'all'){
      //filtered = items.filter((todo)=>activeFilter ==='active'?todo.completed ===false &&todo : todo.completed===true && todo)
   // }
  return (
    <ul className="todo-list">
        {selectFiltered.map((item)=>(
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
