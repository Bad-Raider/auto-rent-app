import { createSlice } from "@reduxjs/toolkit";
import { initialFavoritesState } from "./initialFavoritesState.js";
import { fetchCarById } from "./operation.js";


const favoritesSlice = createSlice({
    name: "favorites",
    initialState: initialFavoritesState,
    
    extraReducers: {
        [fetchCarById.pending](state) {
            state.isLoading = true;
        },
        [fetchCarById.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchCarById.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

export const favoritesReducer = favoritesSlice.reducer;