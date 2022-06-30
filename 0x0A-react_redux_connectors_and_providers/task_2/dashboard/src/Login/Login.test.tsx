//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppLogin from './Login'
import { LOGIN_TEST_IDS } from '../Variables/TestIds'
import userEvent from '@testing-library/user-event'

it('email input tag renders', () => {
    render(<AppLogin />)
    expect(screen.getByTestId('login-input-email')).toBeInTheDocument()
})
it('password input tag renders', () => {
    render(<AppLogin />)
    expect(screen.getByTestId('login-input-password')).toBeInTheDocument()
})
it('2 label tags render', () => {
    render(<AppLogin />)
    expect(screen.getAllByTestId('login-label')).toHaveLength(2)
})
it('Submit Button is disable by default', () => {
    render(<AppLogin />)
    expect(screen.getByTestId(LOGIN_TEST_IDS.login_button)).toHaveAttribute('disabled')
})
it('Submit Button is enable after typing', () => {
    render(<AppLogin />)
    userEvent.type(screen.getByTestId(LOGIN_TEST_IDS.login_input_email), 'a')
    userEvent.type(screen.getByTestId(LOGIN_TEST_IDS.login_input_password), 'a')
    expect(screen.getByTestId(LOGIN_TEST_IDS.login_button)).toBeEnabled()
})
