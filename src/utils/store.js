import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import navSlice from './navSlice';

const store = configureStore({
     reducer:{
        nav:navSlice,
        app:appSlice,
        cache:searchSlice,
        chat:chatSlice,
        
     },
});

export default store;