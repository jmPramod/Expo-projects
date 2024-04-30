import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

const userDetailsSlice = createSlice({
    name: "userAuth",
    initialState: {
        user: {},
        loading: false,
        error: null
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload;
            state.loading = false;
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        }, logout(state) {
            state.user = null;
            state.loading = false;
            state.error = null;
        }
    }
})

let userAction = userDetailsSlice.actions


export { userDetailsSlice, userAction }