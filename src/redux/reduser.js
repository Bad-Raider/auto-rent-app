import { combineReducers } from "@reduxjs/toolkit";
import { carReducer } from "./carSlice.js";

export const reducer = combineReducers({
  car: carReducer,
});