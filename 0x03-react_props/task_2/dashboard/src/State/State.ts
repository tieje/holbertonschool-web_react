import { NotificationItemPropsType } from "../Notifications/NotificationItem"
import { getLatestNotification } from "../utils/utils"

const DEFAULT = 'default'
const URGENT = 'urgent'
const EOD = 'eod'
const NOTIFICATIONS_STATE: NotificationItemPropsType[] = [
    {
        html: undefined,
        type: DEFAULT,
        value: 'New course available'
    },
    {
        html: undefined,
        type: URGENT,
        value: 'New course available'
    },
    {
        html: getLatestNotification(),
        type: EOD,
        value: undefined
    },
]
export {
    DEFAULT,
    URGENT,
    EOD,
    NOTIFICATIONS_STATE,
}
