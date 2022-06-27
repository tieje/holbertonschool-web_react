import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import appReducer from '../reducers/uiReducer'

export const store = configureStore({
    reducer: {
        appState: appReducer,
    },
    devTools: true,
})
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
