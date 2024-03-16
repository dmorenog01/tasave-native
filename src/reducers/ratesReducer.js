import { createSlice } from "@reduxjs/toolkit";
import apiService from "../services/apiService";
import RateStorage from "../utils/RateStorage";

const rateStorage = new RateStorage();

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
            await rateStorage.setRates(rates)
            return
        } catch (error) {
            // In case of error check asyncStorage for a rate
            console.error('Error loading data from API', error.message);
            const localRates = await rateStorage.getRates()
            if (Object.keys(localRates).length === 0) {
                // If AsyncStorage is empty, set error to true
                dispatch(setErrorAndLoading({error: true, loading: false}))
                console.error('AsyncStorage is empty')
            } else {
                // Get rate from AsyncStorage
                dispatch(setState({rates: localRates, loading: false, error: false}))
            }
        }


    }
}

export const updateRates = () => {
    return async (dispatch, getStore) => {
        try {
            const rates = await apiService.getRates()
            dispatch(setState({rates, loading: false, error: false}))
            console.log('Rates refreshed');
        } catch (error) {
            console.error('Could not refresh Rates');
        }
    }
}