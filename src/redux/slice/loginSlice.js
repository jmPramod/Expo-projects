import { createSlice } from "@reduxjs/toolkit"

const userDetailsSlice = createSlice({
    name: "userAuth",
    initialState: {
        user: [],
        loading: false,
        error: null
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        }
    }
})

let userAction = userDetailsSlice.actions
export { userDetailsSlice, userAction }