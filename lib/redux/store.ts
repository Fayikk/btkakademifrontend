import {configureStore} from '@reduxjs/toolkit'
import categorySlice from './features/categorySlice'
import productSlice from './features/productSlice'
export const store = configureStore({
    reducer:{
        // Add your reducers here
        category:categorySlice,
        product:productSlice
    },

    middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,})

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch