import { combineReducers } from "@reduxjs/toolkit";
import { carReducer } from "./carSlice.js";
import { favoritesReducer } from "./favoritesSlise.js";

export const reducer = combineReducers({
  car: carReducer,
  favorites: favoritesReducer,
});