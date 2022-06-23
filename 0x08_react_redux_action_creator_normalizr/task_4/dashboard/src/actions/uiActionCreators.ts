import { Action } from "./courseActionTypes"
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN, LOGOUT } from "./uiActionTypes"

type userInfoType = {
    user: {
        email: string
        password: string
    }
}
function userLogin(info: userInfoType): Action {
    LOGIN.payload = info
    return (LOGIN)
}
function userLogout(): Action {
    return (LOGOUT)
}
function displayNotificationDrawer(): Action {
    return (DISPLAY_NOTIFICATION_DRAWER)
}
function hideNotificationDrawer(): Action {
    return (HIDE_NOTIFICATION_DRAWER)
}
export type {
    userInfoType
}
export {
    userLogin,
    userLogout,
    displayNotificationDrawer,
    hideNotificationDrawer
}
