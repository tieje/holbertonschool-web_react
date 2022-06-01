//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppFooter from './Footer'

it('Copyright <p> tag', () => {
    render(<AppFooter />)
    expect(screen.getByTestId('copyright')).toBeInTheDocument()
})
