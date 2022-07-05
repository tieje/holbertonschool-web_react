import { Action, SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

function selectCourse(index: number): Action {
    return ({
        type: SELECT_COURSE.type,
        payload: index
    })
}
function unselectCourse(index: number): Action {
    return ({
        type: UNSELECT_COURSE.type,
        payload: index
    })
}
export {
    selectCourse,
    unselectCourse
}
