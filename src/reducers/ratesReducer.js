import { createSlice } from "@reduxjs/toolkit";
import apiService from "../services/apiService";

const initialState = {
    rates: null,
    loading: true,
    error: false
}

const ratesSlice = createSlice({
    name: 'rates',
    initialState,
    reducers: {
        setRates(state, action) {
            return { ...state, rates: action.payload}
        },
        setLoading(state, action) {
            return {...state, loading: action.payload}
        },
        setState(state, action) {
            return action.payload
        },
        setError(state, action) {
            return { ...state, error: action.payload}
        },
        setErrorAndLoading(state, action) {
            const { error, loading } = action.payload
            return {...state, error, loading}
        }
    }
})

export default ratesSlice.reducer
export const { setRates, setLoading, setState, setError, setErrorAndLoading } = ratesSlice.actions
export const initializeRates = () => {
    return async function initializeRatesThunk(dispatch, getStore) {
        dispatch(setErrorAndLoading({error: false, loading: true}))
        try {
            const rates = await apiService.getRates()
            dispatch(setState({rates, loading: false, error: false}))
        } catch (error) {
            console.error('error', error.message);
            dispatch(setErrorAndLoading({error: true, loading: false}))
        }
    }
}