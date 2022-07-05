import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Notifications from './Notifications';
import { listNotifications } from '../Variables/State';
import { NOTIFICATION_TEST_IDS } from '../Variables/TestIds';
import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '../Redux/store';

const customRender = (ui: ReactElement) => {
    return render(
        <Provider store={store}>{ui}</Provider >,
    )
}

it('<Notifications /> Renders without crashing', () => {
    customRender(<Notifications props={listNotifications} />)
    expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument()
})
it('Renders three list items', () => {
    customRender(<Notifications props={listNotifications} />)
    expect(screen.getAllByTestId(NOTIFICATION_TEST_IDS.notificationItem)).toHaveLength(3)
})
it('Renders without props', () => {
    customRender(<Notifications />)
    expect(screen.getByTestId(NOTIFICATION_TEST_IDS.notifications)).toBeInTheDocument()
})
it('Renders "No new notification for now" without props', () => {
    customRender(<Notifications />)
    expect(screen.getByText('No new notification for now')).toBeInTheDocument()
})
