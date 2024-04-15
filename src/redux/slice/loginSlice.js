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
            // try {
            //     await AsyncStorage.setItem("user", JSON.stringify(action.payload));
            // } catch (e) {
            //     console.error('Failed to save data', e);
            // }
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
            state.loading = false;
        }
    }
})

let userAction = userDetailsSlice.actions


const loadUserFromAsyncStorage = () => async (dispatch) => {
    dispatch(userDetailsSlice.actions.setLoading(true));

    try {
        // Check if user is present in AsyncStorage
        const userFromStorage = await AsyncStorage.getItem('user');

        if (userFromStorage) {
            dispatch(userDetailsSlice.actions.setUser(JSON.parse(userFromStorage)));
        } else {
            // If user is not present in AsyncStorage, handle accordingly
            // For example, you might want to set default values or perform some other action
        }
    } catch (error) {
        dispatch(userDetailsSlice.actions.setError(error.message));
    }
};
export { userDetailsSlice, userAction, loadUserFromAsyncStorage }