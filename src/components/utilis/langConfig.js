import { createSlice } from "@reduxjs/toolkit";

const langconfig=createSlice({
    name:"config",
    initialState:{
        lang:"en",

    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lang=action.payload;

        },

    },

});
export const {changeLanguage}=langconfig.actions;
export default langconfig.reducer;
