//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CourseListRow, { CourseListRowPropsType, COURSE_LIST_ROW_TEST_IDS } from './CourseListRow'

it('Render a cell with colspan = 2 when textSecondCell is undefined', () => {
    const propsTest: CourseListRowPropsType = {
        isHeader: true,
        textFirstCell: 'first',
    }
    render(<CourseListRow props={propsTest} />)
    expect(screen.getByTestId(COURSE_LIST_ROW_TEST_IDS.isHeader_TRUE_textSecondCell_UNDEFINED)).toBeInTheDocument()
})
it('Render textFirstCell cell when textSecondCell is defined', () => {
    const propsTest: CourseListRowPropsType = {
        isHeader: true,
        textFirstCell: 'first',
        textSecondCell: 'second',
    }
    render(<CourseListRow props={propsTest} />)
    expect(screen.getByTestId(COURSE_LIST_ROW_TEST_IDS.isHeader_TRUE_textFirstCell_DEFINED_th)).toBeInTheDocument()
})
it('Render textSecondCell cell when textSecondCell is defined', () => {
    const propsTest: CourseListRowPropsType = {
        isHeader: true,
        textFirstCell: 'first',
        textSecondCell: 'second',
    }
    render(<CourseListRow props={propsTest} />)
    expect(screen.getByTestId(COURSE_LIST_ROW_TEST_IDS.isHeader_TRUE_textSecondCell_DEFINED_th)).toBeInTheDocument()
})
it('Render isHeader false, render textFirstCell td', () => {
    const propsTest: CourseListRowPropsType = {
        isHeader: false,
        textFirstCell: 'first',
        textSecondCell: 'second'
    }
    render(<CourseListRow props={propsTest} />)
    expect(screen.getByTestId(COURSE_LIST_ROW_TEST_IDS.isHeader_FALSE_textFirstCell_td)).toBeInTheDocument()
})
it('Render isHeader false, render textSecondCell td', () => {
    const propsTest: CourseListRowPropsType = {
        isHeader: false,
        textFirstCell: 'first',
        textSecondCell: 'second'
    }
    render(<CourseListRow props={propsTest} />)
    expect(screen.getByTestId(COURSE_LIST_ROW_TEST_IDS.isHeader_FALSE_textSecondCell_td)).toBeInTheDocument()
})
