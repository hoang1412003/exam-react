import {configureStore} from '@reduxjs/toolkit'
import chemicalsSlice from './chemicalsSlice'

const store = configureStore({
    reducer: {
        chemicals: chemicalsSlice
    }
})

export default store