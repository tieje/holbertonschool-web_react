//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App, { AppStatePropsType } from "./App";
import { COURSE_LIST_TEST_IDS } from '../CourseList/CourseList';

it('<App /> renders div with class App-body', () => {
    render(<App />)
    expect(screen.getByTestId('App-body')).toBeInTheDocument()
})
it('<App /> renders AppHeader', () => {
    render(<App />)
    expect(screen.getByTestId('App-header')).toBeInTheDocument()
})
it('<App /> renders AppFooter', () => {
    render(<App />)
    expect(screen.getByTestId('App-footer')).toBeInTheDocument()
})
it('<App /> renders AppLogin', () => {
    render(<App />)
    expect(screen.getByTestId('App-login')).toBeInTheDocument()
})
it('<App /> renders notifications', () => {
    const PropsOverride: AppStatePropsType = {
        displayDrawer: true
    }
    render(<App PropsOverride={PropsOverride} />)
    expect(screen.getByTestId('notifications')).toBeInTheDocument()
})
it('CourseList is not displayed', () => {
    render(<App />)
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
})
it('CourseList LoggedIn is true, verify Login component is not included', () => {
    const PropsOverride: AppStatePropsType = {
        isLoggedIn: true
    }
    render(<App PropsOverride={PropsOverride} />)
    expect(screen.queryByTestId('App-login')).not.toBeInTheDocument()
})
it('CourseList LoggedIn is true, verify CourseList component is included', () => {
    const PropsOverride: AppStatePropsType = {
        isLoggedIn: true
    }
    render(<App PropsOverride={PropsOverride} />)
    expect(screen.getByTestId(COURSE_LIST_TEST_IDS.courseListTable)).toBeInTheDocument()
})
it('Your notifications is displayed even when displayDrawer is false', () => {
    const PropsOverride: AppStatePropsType = {
        displayDrawer: false
    }
    render(<App PropsOverride={PropsOverride} />)
    expect(screen.getByText('Your Notifications')).toBeInTheDocument()
})
it('Your notifications is displayed when displayDrawer is true', () => {
    const PropsOverride: AppStatePropsType = {
        displayDrawer: true
    }
    render(<App PropsOverride={PropsOverride} />)
    expect(screen.getByText('Your Notifications')).toBeInTheDocument()
})
it('Notifications not displayed when displayDrawer is false', () => {
    const PropsOverride: AppStatePropsType = {
        displayDrawer: false
    }
    render(<App PropsOverride={PropsOverride} />)
    expect(screen.queryByTestId('notifications')).not.toBeInTheDocument()
})
it('Notifications is displayed when displayDrawer is true', () => {
    const PropsOverride: AppStatePropsType = {
        displayDrawer: true
    }
    render(<App PropsOverride={PropsOverride} />)
    expect(screen.getByTestId('notifications')).toBeInTheDocument()
})
