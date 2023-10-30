import { configureStore } from '@reduxjs/toolkit'
import AppSlice from '../features/app/AppSlice'

export const store = configureStore({
    reducer: {
        app: AppSlice,
    },
});