import { combineReducers } from "@reduxjs/toolkit";
import { carReducer } from "./carSlice.js";
// import { filterReducer } from "./filterSlice";

export const reducer = combineReducers({
  car: carReducer,
//   filter: filterReducer,
});