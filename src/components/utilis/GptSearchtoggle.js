import { createSlice } from "@reduxjs/toolkit";

const gptslice=createSlice({
    name:"gpt",
    initialState:{
        togglegpt:false

    },
    reducers:{
        gpttogglesearch:(state)=>
        {
            state.togglegpt=!state.togglegpt;

        }

    }
})
export const{gpttogglesearch}=gptslice.actions;
export default gptslice.reducer;
