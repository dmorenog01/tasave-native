import { createSlice } from "@reduxjs/toolkit";
import apiService from "../services/apiService";

const ratesSlice = createSlice({
    name: 'rates',
    initialState: {'USD': {
        'BCV': {
            rate: 35.43
        },
        'Paralelo': {
            rate: 38.93
        },
    }},
    reducers: {
        updateRates(state, action) {
            return apiService.getRates()
        }
    }
})

export default ratesSlice.reducer
export const { updateRates } = ratesSlice.actions