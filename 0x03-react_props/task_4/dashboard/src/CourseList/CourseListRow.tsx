// types
export type CourseListRowPropsType = {
    isHeader: boolean
    textFirstCell: string
    textSecondCell?: string
}
// testing
export const COURSE_LIST_ROW_TEST_IDS = {
    isHeader_TRUE_textSecondCell_UNDEFINED: 'isHeader is true textSecondCell is undefined',
    isHeader_TRUE_textFirstCell_DEFINED_th: 'isHeader is true textFirstCell is defined th',
    isHeader_TRUE_textSecondCell_DEFINED_th: 'isHeader is true textSecondCell is defined th',
    isHeader_FALSE_textFirstCell_td: 'isHeader is false textFirstCell td',
    isHeader_FALSE_textSecondCell_td: 'isHeader is false textSecondCell td',
}
// main component
const CourseListRow = ({ props }: { props: CourseListRowPropsType }) => {
    return (
        <tr
            className='border border-black'
        >
            {props.isHeader === true && props.textSecondCell === undefined ?
                <th colSpan={2}
                    data-testid={COURSE_LIST_ROW_TEST_IDS.isHeader_TRUE_textSecondCell_UNDEFINED}
                    className='border border-black'
                >
                    {props.textFirstCell}
                </th> : null}
            {props.isHeader === true && props.textSecondCell !== undefined ?
                <>
                    <th
                        data-testid={COURSE_LIST_ROW_TEST_IDS.isHeader_TRUE_textFirstCell_DEFINED_th}
                        className='border border-black'
                    >
                        {props.textFirstCell}
                    </th>
                    <th
                        data-testid={COURSE_LIST_ROW_TEST_IDS.isHeader_TRUE_textSecondCell_DEFINED_th}
                        className='border border-black'
                    >
                        {props.textSecondCell}
                    </th>
                </> : null}
            {props.isHeader === false ?
                <>
                    <td
                        data-testid={COURSE_LIST_ROW_TEST_IDS.isHeader_FALSE_textFirstCell_td}
                        className='border border-black'
                    >
                        {props.textFirstCell}
                    </td>
                    <td
                        data-testid={COURSE_LIST_ROW_TEST_IDS.isHeader_FALSE_textSecondCell_td}
                        className='border border-black'
                    >
                        {props.textSecondCell}
                    </td>
                </> : null}
        </tr>
    )
}
export default CourseListRow
