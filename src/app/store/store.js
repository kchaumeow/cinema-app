import { configureStore } from '@reduxjs/toolkit'
import ticketSlice from './ticketSlice'
export default configureStore({
    reducer: {
        ticketSlice,
    },
})
