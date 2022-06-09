//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App, { AppStatePropsType } from "./App";
import { APP_TEST_IDS, BODY_SECTION_TEST_IDS, COURSE_LIST_TEST_IDS, LOGIN_TEST_IDS, NOTIFICATION_TEST_IDS } from '../Variables/TestIds';
import userEvent from '@testing-library/user-event';

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
    expect(screen.getByTestId(LOGIN_TEST_IDS.login_button)).toBeInTheDocument()
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
    expect(screen.queryByTestId(LOGIN_TEST_IDS.login_button)).not.toBeInTheDocument()
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
    expect(screen.getByTestId(NOTIFICATION_TEST_IDS.notifications)).toBeInTheDocument()
})
it('Login button goes to courses', () => {
    render(<App />)
    const LoginTo = screen.getByTestId(LOGIN_TEST_IDS.login_button)
    userEvent.type(screen.getByTestId(LOGIN_TEST_IDS.login_input_email), 'a')
    userEvent.type(screen.getByTestId(LOGIN_TEST_IDS.login_input_password), 'a')
    userEvent.click(LoginTo)
    expect(screen.getByTestId(COURSE_LIST_TEST_IDS.courseListTable)).toBeInTheDocument()
})
/*
// A bit too hard to test for right now.
it('Logout shortcut', () => {
    const PropsOverride: AppStatePropsType = {
        isLoggedIn: true,
    }
    render(<App PropsOverride={PropsOverride} />)
    userEvent.type(screen.getByTestId(APP_TEST_IDS.outermost_tag), '{ctrl} h')
    expect(screen.getByTestId(LOGIN_TEST_IDS.login_button)).toBeInTheDocument()
})
*/
it('Renders at least one BodySection', () => {
    render(<App />)
    expect(screen.getAllByTestId(BODY_SECTION_TEST_IDS.bodySection)).toHaveLength(2)
})
it('Notifications is hidden when X button is clicked', () => {
    const PropsOverride: AppStatePropsType = {
        displayDrawer: true
    }
    render(<App PropsOverride={PropsOverride} />)
    userEvent.click(screen.getByTestId(NOTIFICATION_TEST_IDS.closeButton))
    expect(screen.queryByTestId(NOTIFICATION_TEST_IDS.notifications)).not.toBeInTheDocument()
})
it('Notifications display when Your Notifications is clicked', () => {
    render(<App />)
    userEvent.click(screen.getByTestId(APP_TEST_IDS.outermost_tag))
    expect(screen.getByTestId(NOTIFICATION_TEST_IDS.notifications)).toBeInTheDocument()
})
