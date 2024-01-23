
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import moviesReducer from './movieSlice';
import gptReducer from './GptSearchtoggle';
import configReducer from './langConfig';


const appStore=configureStore({
   reducer:{
    user:userReducer ,
    movie:moviesReducer,
    gpt:gptReducer,
    config:configReducer,

  }
});
export default appStore;
