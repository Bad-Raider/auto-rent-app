import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


axios.defaults.baseURL = "https://648ffa9f1e6aa71680ca51c7.mockapi.io/auto-rent/";

export const fetchCar = createAsyncThunk("car/fetchAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/auto?page=1&limit=8");
            return response.data;    
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    });

export const fetchMoreCars = createAsyncThunk("car/fetchMore",
    async (_, thunkAPI) => {
        try {
            const { car } = thunkAPI.getState();
            const nextPage = car.page + 1;
            const response = await axios.get(`/auto?page=${nextPage}&limit=${car.limit}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

