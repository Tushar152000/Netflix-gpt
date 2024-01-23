import {createSlice} from '@reduxjs/toolkit';

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowplayingMovie:null,
        trailerVideo:null,
        popularMovie:null,
        upcomingMovie:null,
        topratedMovie:null,
    },
    reducers:
    {
        addPlayingMovie:(state,action)=>{
        state.nowplayingMovie=action.payload;

    },
    
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie=action.payload;
        },
        addupcomingMovie:(state,action)=>{
            state.upcomingMovie=action.payload;
        },
        addtopratedMovie:(state,action)=>{
            state.topratedMovie=action.payload;
        }

        
    
    
},
});
export const{addPlayingMovie,addTrailerVideo,addPopularMovie,addupcomingMovie,addtopratedMovie}=movieSlice.actions;
export default movieSlice.reducer; 
 