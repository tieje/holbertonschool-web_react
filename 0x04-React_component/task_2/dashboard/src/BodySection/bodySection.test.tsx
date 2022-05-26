import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BodySection from './bodySection';

it('Render children in bodySection', () => {
    const testStr = 'test BodySection children'
    render(
        <BodySection>
            <p>{testStr}</p>
        </BodySection>
    )
    expect(screen.getByText(testStr)).toBeInTheDocument()
})
