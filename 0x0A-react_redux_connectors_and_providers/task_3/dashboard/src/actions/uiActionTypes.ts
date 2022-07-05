import { Action } from "./courseActionTypes";

const LOGIN: Action = {
    type: 'LOGIN',
}
const LOGOUT: Action = {
    type: 'LOGOUT'
}
const DISPLAY_NOTIFICATION_DRAWER: Action = {
    type: 'DISPLAY_NOTIFICATION_DRAWER'
}
const HIDE_NOTIFICATION_DRAWER: Action = {
    type: 'HIDE_NOTIFICATION_DRAWER'
}

export {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER
}
