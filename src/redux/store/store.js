import { configureStore } from '@reduxjs/toolkit'
import { userDetailsSlice } from './../slice/loginSlice';

export const store = configureStore({
    reducer: {
        userList: userDetailsSlice.reducer
    },
})
