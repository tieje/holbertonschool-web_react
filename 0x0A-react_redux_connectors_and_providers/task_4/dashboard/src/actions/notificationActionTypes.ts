import { Action } from "./courseActionTypes";

const MARK_AS_READ: Action = {
    type: 'MARK_AS_READ'
}
const SET_TYPE_FILTER: Action = {
    type: 'SET_TYPE_FILTER'
}
export type NotificationFilterType = 'DEFAULT' | 'URGENT'
export {
    MARK_AS_READ,
    SET_TYPE_FILTER
}
