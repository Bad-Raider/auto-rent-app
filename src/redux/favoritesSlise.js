import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: {
        items: [],
    },
    reducers: {
        toggleFavorite: (state, action) => {
            const carIndex = state.items.findIndex(car => car.id === action.payload.id);

            carIndex !== -1
                ? state.items.splice(carIndex, 1)
                : state.items.push(action.payload);
        },
    },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;