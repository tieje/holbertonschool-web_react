//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "./App";

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
    render(<App />)
    expect(screen.getByTestId('notifications')).toBeInTheDocument()
})
