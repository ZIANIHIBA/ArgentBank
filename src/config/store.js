import { configureStore } from '@reduxjs/toolkit'
import  {rootReducer }  from '@/reducers/index'
//import reducers from "../reducers";
export const store = configureStore({
   reducer:rootReducer
 //reducer:reducers,
 
});

console.log(store.getState())