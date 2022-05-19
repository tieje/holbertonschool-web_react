import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';

test('<Notifications /> Renders without crashing', () => {
    render(<Notifications />)
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})
test('Renders three list items', () => {
    render(<Notifications />)
    expect(screen.getAllByTestId('notification')).toHaveLength(3)
})
