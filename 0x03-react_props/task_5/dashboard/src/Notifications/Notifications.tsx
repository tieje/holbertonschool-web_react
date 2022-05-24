import './Notifications.css'
import NotificationItem, { NotificationItemPropsType } from './NotificationItem'
import { NotificationItemShape } from './NotificationItemShape'

export const NOTIFICATION_TEST_IDS = {
    notifications: 'notifications'
}

const Notifications = ({ props }: { props?: NotificationItemShape[] }) => {
    function handleClick() {
        console.log('Close button has been clicked')
    }
    console.log(props)
    if (props !== undefined) {
        return (
            <div
                className='Notifications grid gap-4 border border-dashed border-red-500 p-5 m-5'
                data-testid={NOTIFICATION_TEST_IDS.notifications}
            >
                <div className='grid grid-cols-1 justify-items-end'>
                    <button
                        className='w-10 text-lg hover:bg-gray-200 rounded-lg'
                        onClick={handleClick}
                        aria-label='Close'
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
                            html: notification.html
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
