import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import loderSlice from "../features/LoaderSlice";
const rootReducer = combineReducers({
  auth: authSlice,
  loader: loderSlice,
});

export default rootReducer;
