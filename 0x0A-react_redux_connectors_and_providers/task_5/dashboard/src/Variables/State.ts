import { AppStatePropsType } from "../App/App"
import { CourseListRowPropsType } from "../CourseList/CourseListRow"
import { CourseShapePropType } from "../CourseList/CourseShape"
import { NotificationItemPropsType } from "../Notifications/NotificationItem"
import { NotificationItemShape } from "../Notifications/NotificationItemShape"
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
const COURSELIST_THEAD_ROW_1: CourseListRowPropsType = {
    isHeader: true,
    textFirstCell: "Available Courses"
}
const COURSELIST_THEAD_ROW_2: CourseListRowPropsType = {
    isHeader: true,
    textFirstCell: "Course name",
    textSecondCell: 'Credit'
}
const COURSELIST_TBODY_ROW_1: CourseListRowPropsType = {
    isHeader: false,
    textFirstCell: 'ES6',
    textSecondCell: '60'
}
const COURSELIST_TBODY_ROW_2: CourseListRowPropsType = {
    isHeader: false,
    textFirstCell: 'Webpack',
    textSecondCell: '20'
}
const COURSELIST_TBODY_ROW_3: CourseListRowPropsType = {
    isHeader: false,
    textFirstCell: 'React',
    textSecondCell: '40'
}
const initialAppState: AppStatePropsType = {
    isLoggedIn: false,
    displayDrawer: false,
}
const listCourses: CourseShapePropType[] = [
    {
        id: 1,
        name: 'ES6',
        credit: 60
    },
    {
        id: 2,
        name: 'Webpack',
        credit: 20
    },
    {
        id: 3,
        name: 'React',
        credit: 40
    },
]
const listNotifications: NotificationItemShape[] =
    [
        {
            id: 1,
            html: undefined,
            type: DEFAULT,
            value: 'New course available'
        },
        {
            id: 2,
            html: undefined,
            type: URGENT,
            value: 'New course available'
        },
        {
            id: 3,
            html: getLatestNotification(),
            type: EOD,
            value: undefined
        },
    ]
type INITIAL_APP_STATE_Type = {
    isNotificationDrawerVisible: boolean
    isUserLoggedIn: boolean
}
const INITIAL_APP_STATE: INITIAL_APP_STATE_Type = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
}

export {
    DEFAULT,
    URGENT,
    EOD,
    NOTIFICATIONS_STATE,
    COURSELIST_TBODY_ROW_1,
    COURSELIST_TBODY_ROW_2,
    COURSELIST_TBODY_ROW_3,
    COURSELIST_THEAD_ROW_1,
    COURSELIST_THEAD_ROW_2,
    initialAppState,
    listCourses,
    listNotifications,
    INITIAL_APP_STATE,
}
