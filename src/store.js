import { configureStore } from '@reduxjs/toolkit'
import authReducer from './interfaces/Auth/reducer'
import  notificationsReducer  from './interfaces/Notifications/reducer'

export const store = configureStore({
    reducer: {
        authReducer,
        notificationsReducer
    }
})
