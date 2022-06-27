import { store } from "../Redux/store";
import { initialAppState } from "../Variables/State";

it('test initial values', () => {
    const expectedResult = {
        appState: {
            isNotificationDrawerVisible: initialAppState.displayDrawer,
            isUserLoggedIn: initialAppState.isLoggedIn
        },
    }
    const result = store.getState()
    expect(expectedResult).toEqual(result)
})
