//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CourseList, { CourseListPropsType, COURSE_LIST_TEST_IDS } from './CourseList'

it('Render a cell with colspan = 2 when textSecondCell is undefined', () => {
    const propsTest: CourseListPropsType = {
        isHeader: true,
        textFirstCell: 'first',
    }
    render(<CourseList props={propsTest}/>)
    expect(screen.getByTestId(COURSE_LIST_TEST_IDS.textSecondCell_IS_UNDEFINED)).toBeInTheDocument()
})
