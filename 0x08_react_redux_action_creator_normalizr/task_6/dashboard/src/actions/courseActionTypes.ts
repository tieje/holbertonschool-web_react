type Action = {
    type: string
    payload?: any
}
const SELECT_COURSE: Action = {
    type: 'SELECT_COURSE',
}
const UNSELECT_COURSE: Action = {
    type: 'UNSELECT_COURSE',
}
export type {
    Action
}
export {
    SELECT_COURSE,
    UNSELECT_COURSE
}
