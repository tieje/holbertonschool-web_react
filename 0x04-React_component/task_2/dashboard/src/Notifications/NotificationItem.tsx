import { EOD, URGENT } from "../Variables/State"

export type NotificationItemPropsType = {
    type?: string
    value?: string
    html?: string
    id?: number
    MarkAsRead_method?(id?: number): void
}
const NotificationItem = ({ props }: { props: NotificationItemPropsType }) => {
    let dangerousHTML = props?.html
    let liStyle = 'text-red-500'
    if (dangerousHTML === undefined && props?.value !== undefined) {
        dangerousHTML = props?.value
    } else if (dangerousHTML === undefined) {
        dangerousHTML = ''
    }
    switch (props?.type) {
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
            data-notification-type={props?.type}
            data-testid='notificationItem'
            dangerouslySetInnerHTML={{ __html: dangerousHTML }}
            onClick={() => {
                if (props.MarkAsRead_method) {
                    props?.MarkAsRead_method(props.id)
                }
            }}
        >
        </li>
    )
}
export default NotificationItem
