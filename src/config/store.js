import { configureStore } from '@reduxjs/toolkit'

import  {rootReducer }  from '@/reducers/index'
//import loginSlice from '../reducers/login.reducer';
export const store = configureStore({
   reducer:rootReducer
 
});

