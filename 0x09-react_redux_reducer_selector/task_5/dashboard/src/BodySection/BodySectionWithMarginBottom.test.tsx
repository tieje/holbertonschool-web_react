import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

it('Render children in BodySectionWithMarginBottom', () => {
    const testStr = 'test BodySectionWithMarginBottom children'
    render(
        <BodySectionWithMarginBottom>
            <p>{testStr}</p>
        </BodySectionWithMarginBottom>
    )
    expect(screen.getByText(testStr)).toBeInTheDocument()
})
it('Render title in BodySectionWithMarginBottom', () => {
    const testTitle = 'test BodySection title'
    render(
        <BodySectionWithMarginBottom title={testTitle}>
            <></>
        </BodySectionWithMarginBottom>
    )
    expect(screen.getByText(testTitle)).toBeInTheDocument()
})
