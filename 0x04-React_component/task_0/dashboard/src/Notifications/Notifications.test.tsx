import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications, { NOTIFICATION_TEST_IDS } from './Notifications';
import { listNotifications } from '../App/App';

test('<Notifications /> Renders without crashing', () => {
    render(<Notifications props={listNotifications} />)
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})
test('Renders three list items', () => {
    render(<Notifications props={listNotifications} />)
    expect(screen.getAllByTestId('notification')).toHaveLength(3)
})
test('Renders without props', () => {
    render(<Notifications />)
    expect(screen.getByTestId(NOTIFICATION_TEST_IDS.notifications)).toBeInTheDocument()
})
test('Renders "No new notification for now" without props', () => {
    render(<Notifications />)
    expect(screen.getByText('No new notification for now')).toBeInTheDocument()
})
