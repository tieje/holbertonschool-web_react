import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItem, { NotificationItemPropsType } from './NotificationItem';
import { DEFAULT } from '../State/State';


test('Render without crashing', () => {
    const defaultProps: NotificationItemPropsType = {
        html: undefined,
        type: undefined,
        value: undefined
    }
    render(<NotificationItem props={defaultProps} />)
    expect(screen.getByTestId('notification')).toBeInTheDocument()
})
test('type, "default", and value, "test"', () => {
    const testProp: NotificationItemPropsType = {
        html: undefined,
        type: DEFAULT,
        value: 'test'
    }
    render(<NotificationItem props={testProp} />)
    expect(screen.getByText('test')).toBeInTheDocument()
})
test('dangerouslySetInnerHTML', () => {
    const testProp: NotificationItemPropsType = {
        html: '<u>test</u>',
        type: DEFAULT,
        value: 'nothing'
    }
    render(<NotificationItem props={testProp} />)
    expect(screen.getByText('test')).toBeInTheDocument()
})
