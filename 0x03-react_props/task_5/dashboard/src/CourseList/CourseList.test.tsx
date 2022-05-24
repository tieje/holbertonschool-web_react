//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CourseList from './CourseList'
import { listCourses } from '../App/App'

it('Render row thead 1', () => {
    render(<CourseList props={listCourses} />)
    expect(screen.getByText('Available Courses')).toBeInTheDocument()
})
it('Render row thead 2', () => {
    render(<CourseList props={listCourses} />)
    expect(screen.getByText('Course name')).toBeInTheDocument()
})
it('Render row tbody 1', () => {
    render(<CourseList props={listCourses} />)
    expect(screen.getByText('ES6')).toBeInTheDocument()
})
it('Render row tbody 2', () => {
    render(<CourseList props={listCourses} />)
    expect(screen.getByText('Webpack')).toBeInTheDocument()
})
it('Render row tbody 3', () => {
    render(<CourseList props={listCourses} />)
    expect(screen.getByText('React')).toBeInTheDocument()
})
it('Renders empty array', () => {
    render(<CourseList />)
    expect(screen.getByText('No course available yet')).toBeInTheDocument()
})