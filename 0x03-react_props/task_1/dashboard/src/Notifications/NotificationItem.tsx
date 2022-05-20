export type NotificationItemPropsType = {
    type?: string
    value?: string
    html?: string
}
const NotificationItem = ({ props }: { props: NotificationItemPropsType }) => {
    let dangerousHTML = props.html
    if (dangerousHTML === undefined) {
        dangerousHTML = ''
    }
    return (
        <li
            data-notification-type={props.type}
            data-testid='notification'
            dangerouslySetInnerHTML={{ __html: dangerousHTML }}
        >
            {props.value}
        </li>
    )
}
export default NotificationItem
