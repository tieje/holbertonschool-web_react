import './Notifications.css'
import NotificationItem, { NotificationItemPropsType } from './NotificationItem'
import { NotificationItemShape } from './NotificationItemShape'
import { NOTIFICATION_TEST_IDS } from '../Variables/TestIds'
import { useReduxDispatch } from '../Redux/hooks'
import { Action } from '../actions/courseActionTypes'

const Notifications = ({ MarkAsReadMethod, hideMethod, props }: { MarkAsReadMethod?(id: number): void, hideMethod?(): Action, props?: NotificationItemShape[] }) => {
    const dispatch = useReduxDispatch()
    // functions
    if (props !== undefined) {
        return (
            <div
                className='Notifications grid gap-4 border border-dashed border-red-500 p-5 m-5 bg-[#fff8f8]'
                data-testid={NOTIFICATION_TEST_IDS.notifications}
            >
                <div
                    className='grid grid-cols-1 justify-items-end'
                    data-testid={NOTIFICATION_TEST_IDS.notificationDrawer}
                >
                    <button
                        className='w-10 text-lg hover:bg-gray-200 rounded-lg'
                        onClick={() => {
                            if (hideMethod) {
                                dispatch(hideMethod())
                            }
                        }}
                        aria-label='Close'
                        data-testid={NOTIFICATION_TEST_IDS.closeButton}
                    >X</button>
                </div>
                <p>
                    Here is the list of notifications
                </p>
                <ul className='grid gap-1 pl-10'>
                    {props.map((notification: NotificationItemShape) => {
                        const newNotification: NotificationItemPropsType = {
                            type: notification.type,
                            value: notification.value,
                            html: notification.html,
                            id: notification.id,
                            MarkAsRead_method: MarkAsReadMethod,
                        }
                        return (
                            <NotificationItem key={notification.id} props={newNotification} />
                        )
                    })}
                </ul>
            </div>
        )
    }
    return (
        <div
            className='Notifications grid gap-4 border border-dashed border-red-500 p-5 m-5'
            data-testid={NOTIFICATION_TEST_IDS.notifications}
        >
            No new notification for now
        </div>
    )
}
export default Notifications
