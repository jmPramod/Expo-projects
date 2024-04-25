import { createSlice } from "@reduxjs/toolkit"
import AsyncStorage from '@react-native-async-storage/async-storage';

const userDetailsSlice = createSlice({
    name: "userAuth",
    initialState: {
        user: [],
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


const loadUserFromAsyncStorage = () => async (dispatch) => {
    dispatch(userDetailsSlice.actions.setLoading(true));

    try {
        // Check if user is present in AsyncStorage
        const userFromStorage = await AsyncStorage.getItem('user');
        console.log("userFromStorage", userFromStorage);
        if (userFromStorage) {
            dispatch(userDetailsSlice.actions.setUser(JSON.parse(userFromStorage)));
        }
    } catch (error) {
        dispatch(userDetailsSlice.actions.setError(error.message));
    }
};

export const performLogout = () => async (dispatch) => {
    console.log("2");
    dispatch(userDetailsSlice.actions.setLoading(true));
    console.log("3");
    try {
        // Clear AsyncStorage
        await AsyncStorage.removeItem('user');
        const value = await AsyncStorage.getItem("user");

        console.log("4", value);
        // Dispatch logout action to update Redux store
        dispatch(userDetailsSlice.actions.logout());
    } catch (error) {
        console.error('Error clearing AsyncStorage:', error);
    }
}
export { userDetailsSlice, userAction, loadUserFromAsyncStorage }