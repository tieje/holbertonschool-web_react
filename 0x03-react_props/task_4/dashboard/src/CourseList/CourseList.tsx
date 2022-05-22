export type CourseListPropsType = {
    isHeader: boolean
    textFirstCell: string
    textSecondCell?: string
}
export const COURSE_LIST_TEST_IDS = {
    textSecondCell_IS_UNDEFINED: 'textSecondCell is undefined',
}
const CourseList = ({ props }: { props: CourseListPropsType }) => {
    return (
        <table>
            <tr>
                {props.isHeader === true && props.textSecondCell === undefined ?
                    <th colSpan={2} data-testid={COURSE_LIST_TEST_IDS.textSecondCell_IS_UNDEFINED}>
                        {props.textFirstCell}
                    </th> : null}
                {props.isHeader === true && props.textSecondCell !== undefined ?
                    <>
                        <th>{props.textFirstCell}</th>
                        <th>{props.textSecondCell}</th>
                    </> : null}
                {props.isHeader === false ?
                    <>
                        <td>{props.textFirstCell}</td>
                        <td>{props.textSecondCell}</td>
                    </> : null}
            </tr>
        </table>
    )
}
export default CourseList