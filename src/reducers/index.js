import { combineReducers } from "redux";
import loginReducer from './login.reducer'
import userReducer from "./user.reducer";


export const rootReducer= combineReducers({
   loginReducer,
  userReducer
})

