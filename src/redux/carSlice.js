import { createSlice } from "@reduxjs/toolkit";
import { initialCarState } from "./initialCarState.js";
import { fetchCar } from "./operation.js";


const carSlice = createSlice({
    name: "car",
    initialState: initialCarState,
    
    extraReducers: {
        [fetchCar.pending](state) {
            state.isLoading = true;
        },
        [fetchCar.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchCar.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const carReducer = carSlice.reducer;