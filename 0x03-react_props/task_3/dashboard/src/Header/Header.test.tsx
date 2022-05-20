//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppHeader from './Header'

it('<App /> renders', () => {
    render(<AppHeader />)
    expect(screen.getByText('School dashboard')).toBeInTheDocument()
})
it('img tag renders', () => {
    render(<AppHeader />)
    expect(screen.getByTestId('header-img')).toBeInTheDocument()
})
it('h1 tag renders', () => {
    render(<AppHeader />)
    expect(screen.getByTestId('header-h1')).toBeInTheDocument()
})
