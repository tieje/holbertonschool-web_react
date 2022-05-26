import './Notifications.css'
import NotificationItem, { NotificationItemPropsType } from './NotificationItem'
import { NOTIFICATIONS_STATE } from '../Variables/State'
import { nanoid } from 'nanoid'
const Notifications = () => {
    function handleClick() {
        console.log('Close button has been clicked')
    }
    return (
        <div
            className='Notifications grid gap-4 border border-dashed border-red-500 p-5 m-5'
            data-testid='notifications'
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
                {NOTIFICATIONS_STATE.map((notification: NotificationItemPropsType) => {
                    return (
                        <NotificationItem key={nanoid()} props={notification} />
                    )
                })}
            </ul>
        </div>
    )
}
export default Notifications
