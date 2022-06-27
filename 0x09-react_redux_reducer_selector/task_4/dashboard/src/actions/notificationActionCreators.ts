import { Action } from "./courseActionTypes";
import { MARK_AS_READ, NotificationFilterType, SET_TYPE_FILTER } from "./notificationActionTypes";

function markAsRead(index: number): Action {
    MARK_AS_READ.payload = index
    return (MARK_AS_READ)
}
function setNotificationFilter(filter: NotificationFilterType): Action {
    SET_TYPE_FILTER.payload = filter
    return (SET_TYPE_FILTER)
}
export {
    markAsRead,
    setNotificationFilter
}
