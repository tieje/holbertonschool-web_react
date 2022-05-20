import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItem, { NotificationItemPropsType } from './NotificationItem';

const defaultProps: NotificationItemPropsType = {
    html: undefined,
    type: undefined,
    value: undefined
}

test('Render without crashing', () => {
    render(<NotificationItem props={defaultProps} />)
    expect(screen.getByTestId('notification')).toBeInTheDocument()
})
