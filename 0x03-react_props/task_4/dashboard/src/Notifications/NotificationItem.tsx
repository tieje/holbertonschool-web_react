import { EOD, URGENT } from "../Variables/State"

export type NotificationItemPropsType = {
    type?: string
    value?: string
    html?: string
}
const NotificationItem = ({ props }: { props: NotificationItemPropsType }) => {
    let dangerousHTML = props.html
    let liStyle = 'text-red-500'
    if (dangerousHTML === undefined && props.value !== undefined) {
        dangerousHTML = props.value
    } else if (dangerousHTML === undefined) {
        dangerousHTML = ''
    }
    switch (props.type) {
        case URGENT:
            liStyle = 'text-blue-700'
            break
        case EOD:
            liStyle = 'text-red-700'
            break
    }
    return (
        <li
            className={liStyle}
            data-notification-type={props.type}
            data-testid='notification'
            dangerouslySetInnerHTML={{ __html: dangerousHTML }}
        >
        </li>
    )
}
export default NotificationItem
