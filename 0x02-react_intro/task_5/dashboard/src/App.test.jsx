//Enzyme is dead. I'm going to use React Testing Library
//https://dev.to/wojtekmaj/enzyme-is-dead-now-what-ekl
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "./App";

test('<App /> renders', () => {
    render(<App />)
    expect(screen.getByText('School dashboard')).toBeInTheDocument()
})
test('<App /> renders div with class App-header', () => {
    render(<App />)
    expect(screen.getByTestId('App-header')).toBeInTheDocument()
})
test('<App /> renders div with class App-body', () => {
    render(<App />)
    expect(screen.getByTestId('App-body')).toBeInTheDocument()
})
test('<App /> renders div with class App-footer', () => {
    render(<App />)
    expect(screen.getByTestId('App-footer')).toBeInTheDocument()
})
