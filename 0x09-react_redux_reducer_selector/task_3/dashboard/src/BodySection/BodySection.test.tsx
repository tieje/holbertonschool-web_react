import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BodySection from './BodySection';

it('Render children in bodySection', () => {
    const testStr = 'test BodySection children'
    render(
        <BodySection>
            <p>{testStr}</p>
        </BodySection>
    )
    expect(screen.getByText(testStr)).toBeInTheDocument()
})
it('Render title in bodySection', () => {
    const testTitle = 'test BodySection title'
    render(
        <BodySection title={testTitle}>
            <></>
        </BodySection>
    )
    expect(screen.getByText(testTitle)).toBeInTheDocument()
})
