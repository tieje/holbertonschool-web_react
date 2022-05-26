import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';
import { listNotifications } from '../Variables/State';
import { NOTIFICATION_TEST_IDS } from '../Variables/TestIds';

it('<Notifications /> Renders without crashing', () => {
    render(<Notifications props={listNotifications} />)
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})
it('Renders three list items', () => {
    render(<Notifications props={listNotifications} />)
    expect(screen.getAllByTestId(NOTIFICATION_TEST_IDS.notificationItem)).toHaveLength(3)
})
it('Renders without props', () => {
    render(<Notifications />)
    expect(screen.getByTestId(NOTIFICATION_TEST_IDS.notifications)).toBeInTheDocument()
})
it('Renders "No new notification for now" without props', () => {
    render(<Notifications />)
    expect(screen.getByText('No new notification for now')).toBeInTheDocument()
})
