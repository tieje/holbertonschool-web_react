import { COURSELIST_TBODY_ROW_1, COURSELIST_TBODY_ROW_2, COURSELIST_TBODY_ROW_3, COURSELIST_THEAD_ROW_1, COURSELIST_THEAD_ROW_2 } from "../Variables/State"
import CourseListRow from "./CourseListRow"
//import './CourseList.css'

export const COURSE_LIST_TEST_IDS = {
    courseListTable: 'courseListTable'
}

const CourseList = () => {
    return (
        <table
            className='border border-black'
            id='CourseList'
            data-testid={COURSE_LIST_TEST_IDS.courseListTable}
        >
            <thead
                className='border border-black'
            >
                <CourseListRow props={COURSELIST_THEAD_ROW_1} />
                <CourseListRow props={COURSELIST_THEAD_ROW_2} />
            </thead>
            <tbody
                className='border border-black'
            >
                <CourseListRow props={COURSELIST_TBODY_ROW_1} />
                <CourseListRow props={COURSELIST_TBODY_ROW_2} />
                <CourseListRow props={COURSELIST_TBODY_ROW_3} />
            </tbody>
        </table>
    )
}
export default CourseList