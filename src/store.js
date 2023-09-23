import { configureStore } from '@reduxjs/toolkit'
import authReducer from './interfaces/Auth/reducer'

export const store = configureStore({
    reducer: {
        authReducer
    },
})