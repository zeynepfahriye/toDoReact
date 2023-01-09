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
    ]
},
reducers:{
    addToDo:(state,action)=>{
        state.items.push(action.payload)
    }
}
})
export  const {addToDo} =todosSlice.actions
export default todosSlice.reducer