import './Notifications.css'
import { getLatestNotification } from '../utils/utils'
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
                <li className='text-blue-700' data-priority='default' data-testid='notification'>
                    New course available
                </li>
                <li className='text-red-700' data-priority='urgent' data-testid='notification'>
                    New course available
                </li>
                <li className='text-red-500' dangerouslySetInnerHTML={{ __html: getLatestNotification() }} data-testid='notification'>
                </li>
            </ul>
        </div>
    )
}
export default Notifications
