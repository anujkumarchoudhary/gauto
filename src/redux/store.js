import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import globalReducer from './slices/globalSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        global: globalReducer
    }
})