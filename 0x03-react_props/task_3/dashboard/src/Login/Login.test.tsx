//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppLogin from './Login'

it('2 input tags render', () => {
    render(<AppLogin />)
    expect(screen.getAllByTestId('login-input')).toHaveLength(2)
})
it('2 label tags render', () => {
    render(<AppLogin />)
    expect(screen.getAllByTestId('login-label')).toHaveLength(2)
})
