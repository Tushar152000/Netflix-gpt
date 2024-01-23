import { createSlice } from "@reduxjs/toolkit";
const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addusers:(state,action)=>{
            return action.payload;

        },
        RemoveUsers:(state,action)=>{
            return null
        },

    }
});
export const{addusers,RemoveUsers}=userSlice.actions;
export default userSlice.reducer;
