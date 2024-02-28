import { createSlice } from "@reduxjs/toolkit";

const conversionSlice = createSlice({
    name: 'conversions',
    initialState: {
        fromCurrency: 'USD',
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
        setState(_, action) {
            return action.payload
        }
    }
})

export default conversionSlice.reducer
export const { changeSelectedFromCurrency, changeSelectedToCurrency, updateFromValue, updateToValue, setState } = conversionSlice.actions

export const calculateNewTo = (newFrom) => {
    return function calculateNewToThunk (dispatch, getStore) {
        const state = getStore()
        const { fromCurrency, toCurrency } = state.conversions
        const rate = state.rates[fromCurrency][toCurrency]['rate']

        const newNumericFrom = Number(newFrom).toFixed(2)
        const newNumericTo = (rate * newNumericFrom).toFixed(2)

        const newStringFrom = String(newNumericFrom)
        const newStringTo = String(newNumericTo)

        dispatch(setState({...state.conversions, fromValue: newStringFrom, toValue: newStringTo}))

    }
}

export const calculateNewFrom = (newTo) => {
    return function calculateNewToThunk (dispatch, getStore) {
        const state = getStore()
        const { fromCurrency, toCurrency } = state.conversions
        const rate = state.rates[fromCurrency][toCurrency]['rate']

        const newNumericTo = Number(newTo).toFixed(2)
        const newNumericFrom = (newNumericTo / rate).toFixed(2)

        const newStringFrom = String(newNumericFrom)
        const newStringTo = String(newNumericTo)

        dispatch(setState({...state.conversions, fromValue: newStringFrom, toValue: newStringTo}))

    }
}