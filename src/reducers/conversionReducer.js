import { createSlice } from "@reduxjs/toolkit";
import utils from "../utils";

const conversionSlice = createSlice({
    name: 'conversions',
    initialState: {
        fromCurrency: 'Bs',
        toCurrency: 'BCV',
        fromValue: '0',
        toValue: '0'
    },
    reducers: {
        changeSelectedFromCurrency(state, action) {
            return { ...state, fromCurrency: action.payload }
        },
        changeSelectedToCurrency(state, action) {
            return { ...state, toCurrency: action.payload }
        },
        updateFromValue(state, action) {
            return { ...state, fromValue: action.payload }
        },
        updateToValue(state, action) {
            return { ...state, toValue: action.payload }
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

        const newNumericFrom = utils.formatFloat(Number(newFrom))
        const newNumericTo = utils.formatFloat(newNumericFrom / rate)

        const newStringFrom = String(newNumericFrom)
        const newStringTo = String(newNumericTo)

        dispatch(setState({...state.conversions, fromValue: newStringFrom, toValue: newStringTo}))

    }
}

export const calculateNewFrom = (newTo) => {
    return function calculateNewToThunk (dispatch, getStore) {
        const state = getStore()
        const { fromCurrency, toCurrency } = state.conversions
        const rate = state.rates.rates[fromCurrency][toCurrency]['rate']

        const newNumericTo = utils.formatFloat(Number(newTo))
        const newNumericFrom = utils.formatFloat(newNumericTo * rate)

        const newStringFrom = String(newNumericFrom)
        const newStringTo = String(newNumericTo)

        dispatch(setState({...state.conversions, fromValue: newStringFrom, toValue: newStringTo}))

    }
}