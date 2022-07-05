import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_APP_STATE } from "../Variables/State";

const appSlice = createSlice({
    name: 'App',
    initialState: INITIAL_APP_STATE,
    reducers: {
        displayNotificationDrawer: (state) => { state.isNotificationDrawerVisible = true },
        hideNotificationDrawer: (state) => { state.isNotificationDrawerVisible = false },
        loginSuccess: (state) => { state.isUserLoggedIn = true },
        loginFailure: (state) => { state.isUserLoggedIn = false },
        logout: (state) => { state.isUserLoggedIn = false }
    },
})
export const {
    displayNotificationDrawer,
    hideNotificationDrawer,
    loginFailure,
    loginSuccess,
    logout,
} = appSlice.actions
export default appSlice.reducer
