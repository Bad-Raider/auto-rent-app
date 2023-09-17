import { createSlice } from "@reduxjs/toolkit";
import { initialCarState } from "./initialCarState.js";
import { fetchCar, fetchMoreCars } from "./operation.js";


const carSlice = createSlice({
    name: "car",
    initialState: initialCarState,
    
    reducers: {
        toggleModal: (state) => {
            state.isShow = !state.isShow;
        },
    },

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
            state.limit = 8;
            state.error = action.payload;
        },
        [fetchMoreCars.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = [...state.items, ...action.payload];
            state.page += 1; 
        },
        [fetchMoreCars.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    },
});

export const { toggleModal } = carSlice.actions;
export const carReducer = carSlice.reducer;