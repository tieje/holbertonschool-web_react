//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AppFooter from './Footer'
import { AppProvider } from '../App/AppContext'
import { ReactElement } from 'react'

const customRender = (ui: ReactElement) => {
    return render(
        <AppProvider>{ui}</AppProvider>,
    )
}

it('Copyright <p> tag', () => {
    customRender(<AppFooter />)
    expect(screen.getByTestId('copyright')).toBeInTheDocument()
})
