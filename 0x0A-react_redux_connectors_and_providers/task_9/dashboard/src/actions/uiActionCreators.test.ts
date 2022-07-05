import '@testing-library/jest-dom';
import { Action } from './courseActionTypes';
import { userInfoType, userLogin, userLogout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGOUT } from './uiActionTypes';

it('userLogin', () => {
    const userInfo: userInfoType = { user: { email: 'test@gmail.com', password: 'secret' } }
    const expectedResult: Action = {
        type: 'LOGIN',
        payload: userInfo
    }
    const result: Action = userLogin(userInfo)
    expect(expectedResult).toEqual(result)
})
it('userLogout', () => {
    const expectedResult: Action = { ...LOGOUT }
    const result: Action = userLogout()
    expect(expectedResult).toEqual(result)
})
it('displayNotificationDrawer', () => {
    const expectedResult: Action = { ...DISPLAY_NOTIFICATION_DRAWER }
    const result: Action = displayNotificationDrawer()
    expect(expectedResult).toEqual(result)
})
it('hideNotificationDrawer', () => {
    const expectedResult: Action = { ...HIDE_NOTIFICATION_DRAWER }
    const result: Action = hideNotificationDrawer()
    expect(expectedResult).toEqual(result)
})
