import { createSlice } from "@reduxjs/toolkit";
export const todosSlice = createSlice({
name:'todos',
initialState:{
    items:[
        {
            id:1,
            title:"Learn React",
            completed:true
        },
        {
            id:2,
            title:'Read a book',
            completed:false
        }
    ],
    activeFilter:'all'
},
reducers:{
    addToDo:(state,action)=>{
        state.items.push(action.payload)
    },
    toggle:(state,action)=> {
        const {id} = action.payload;
        const item = state.items.find(item =>item.id ===id)
        item.completed = !item.completed
    },
    destory:(state,action)=> {
        const id = action.payload
        const filters = state.items.filter((item)=>item.id !== id)
        state.items = filters
    },
    changeActiveFilter : (state,action)=>{
        state.activeFilter = action.payload
    },
    clearCompleted:(state)=>{
        const filtered = state.items.filter(item=>item.completed ===false)
        state.items=filtered
    }
}
})
export  const {addToDo,toggle,destory,changeActiveFilter,clearCompleted} =todosSlice.actions
export default todosSlice.reducer