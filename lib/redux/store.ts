import {configureStore} from '@reduxjs/toolkit'
import categorySlice from './features/categorySlice'
import productSlice from './features/productSlice'
import authSlice from './features/authSlice'
import basketSlice from './features/basketSlice'
import paymentSlice from './features/paymentSlice'
export const store = configureStore({
    reducer:{
        // Add your reducers here
        category:categorySlice,
        product:productSlice,
        auth:authSlice,
        basket:basketSlice,
        payment:paymentSlice
    },

    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch