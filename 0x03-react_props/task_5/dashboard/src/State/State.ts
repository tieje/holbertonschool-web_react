import { CourseListRowPropsType } from "../CourseList/CourseListRow"
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
}
