import { createSlice } from "@reduxjs/toolkit";
import utils from "../utils";

const conversionSlice = createSlice({
    name: 'conversions',
    initialState: {
        fromCurrency: 'Bs',
        toCurrency: 'BCV',
        fromValue: 0,
        toValue: 0
    },
    reducers: {
        changeSelectedFromCurrency(state, action) {
            return { ...state, fromCurrency: action.payload }
        },
        changeSelectedToCurrency(state, action) {
            return { ...state, toCurrency: action.payload }
        },
        updateFromValue(state, action) {
            return { ...state, fromValue: Number(action.payload) }
        },
        updateToValue(state, action) {
            return { ...state, toValue: Number(action.payload) }
        },
        updateSelectedCurrencies(state, action) {
            const { fromCurrency, toCurrency } = action.payload
            return {...state, fromCurrency, toCurrency}
        },
        setState(_, action) {
            return action.payload
        }
    }
})

export default conversionSlice.reducer
export const { changeSelectedFromCurrency, changeSelectedToCurrency, updateFromValue, updateToValue, setState, updateSelectedCurrencies } = conversionSlice.actions

export const calculateNewTo = (newFrom) => {
    return function calculateNewToThunk (dispatch, getStore) {
        const state = getStore()
        const { fromCurrency, toCurrency } = state.conversions
        const rate = state.rates.rates[fromCurrency][toCurrency]['rate']

        const newNumberFrom = Number(newFrom)
        const newTo = newNumberFrom / rate

        dispatch(setState({...state.conversions, fromValue: newNumberFrom, toValue: newTo}))

    }
}

export const updateAndRecalculate = (payload) => {
    return function updateAndRecalculateThunk (dispatch, getStore) {
        const state = getStore()
        const { fromCurrency, toCurrency} = payload
        const { fromValue } = state.conversions

        const rate = state.rates.rates[fromCurrency][toCurrency]['rate']

        const toValue = fromValue / rate;

        dispatch(setState({fromCurrency, toCurrency, fromValue, toValue}))
    }
}

export const calculateNewFrom = (newTo) => {
    return function calculateNewToThunk (dispatch, getStore) {
        const state = getStore()
        const { fromCurrency, toCurrency } = state.conversions
        const rate = state.rates.rates[fromCurrency][toCurrency]['rate']

        const newNumberTo = Number(newTo)
        const newFrom = rate * newNumberTo

        dispatch(setState({...state.conversions, fromValue: newFrom, toValue: newNumberTo}))

    }
}