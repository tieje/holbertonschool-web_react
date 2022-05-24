import { //COURSELIST_TBODY_ROW_1, COURSELIST_TBODY_ROW_2, COURSELIST_TBODY_ROW_3,
    COURSELIST_THEAD_ROW_1, COURSELIST_THEAD_ROW_2
} from "../State/State"
import CourseListRow, { CourseListRowPropsType } from "./CourseListRow"
import { CourseShapePropType } from "./CourseShape"
//import './CourseList.css'

export const COURSE_LIST_TEST_IDS = {
    courseListTable: 'courseListTable'
}

const CourseList = ({ props }: { props?: CourseShapePropType[] }) => {
    if (props) {
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
                    {props.map((course: CourseShapePropType) => {
                        const newCourse: CourseListRowPropsType = {
                            isHeader: false,
                            textFirstCell: course.name,
                            textSecondCell: course.credit
                        }
                        return (
                            <CourseListRow key={course.id} props={newCourse} />
                        )
                    })}
                </tbody>
            </table>
        )
    }
    return (
        <table
            className='border border-black'
            id='CourseList'
            data-testid={COURSE_LIST_TEST_IDS.courseListTable}
        >
            <thead
                className='border border-black'
            >
                <tr>
                    No course available yet
                </tr>
            </thead>
        </table>
    )
}
export default CourseList