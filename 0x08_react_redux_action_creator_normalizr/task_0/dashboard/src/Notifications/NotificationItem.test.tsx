import {
    cleanup,
    render, screen
} from '@testing-library/react';
import '@testing-library/jest-dom';
import NotificationItem, { NotificationItemPropsType } from './NotificationItem';
import { DEFAULT } from '../Variables/State';
import userEvent from '@testing-library/user-event';
import { NOTIFICATION_TEST_IDS } from '../Variables/TestIds';
import { markAsRead } from '../utils/ConsoleLogFunctions';


test('Render without crashing', () => {
    const defaultProps: NotificationItemPropsType = {
        html: undefined,
        type: undefined,
        value: undefined
    }
    render(<NotificationItem props={defaultProps} />)
    expect(screen.getByTestId(NOTIFICATION_TEST_IDS.notificationItem)).toBeInTheDocument()
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

// mock console.log
afterEach(cleanup)
describe('Console output', () => {
    const outputs = {
        output1: `Notification 1 has been marked as read`,
    }
    const originalLog = console.log
    afterEach(() => (console.log = originalLog))
    describe('check console.log() output from Notifications', () => {
        const consoleOutput: string[] = []
        const mockedLog = (output: string) => consoleOutput.push(output)
        beforeEach(() => (console.log = mockedLog))
        it(`Clicking notificationItem shows "${outputs.output1}"`, () => {
            const NoteProp: NotificationItemPropsType = {
                type: DEFAULT,
                value: 'Another Course',
                id: 1,
                MarkAsRead_method: markAsRead
            }
            render(<NotificationItem props={NoteProp} />)
            const notification = screen.getByTestId(NOTIFICATION_TEST_IDS.notificationItem)
            userEvent.click(notification)
            expect(consoleOutput).toContain(outputs.output1)
        })
    })
})
