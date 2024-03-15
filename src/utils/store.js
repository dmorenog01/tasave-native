import { configureStore } from "@reduxjs/toolkit";
import conversionReducer from "../reducers/conversionReducer";
import ratesReducer from "../reducers/ratesReducer";

const store = configureStore({
    reducer: {
        rates: ratesReducer,
        conversions: conversionReducer
    }
})

export default store