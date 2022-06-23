import NOTIFICATION_DATA from '../notifications.json'

type ContextItemType = {
    guid: string
    isRead: boolean
    type: string
    value: string
}
type ItemValue = {
    id: string;
    author: {
        id: string; name: { first: string; last: string; };
        email: string; picture: string; age: number;
    };
    context: ContextItemType
}
function getAllNotificationsByUser(userId: string): ContextItemType[] {
    const result: ContextItemType[] = []
    NOTIFICATION_DATA.forEach((item: ItemValue) => {
        if (item.author.id === userId) {
            result.push(item.context)
        }
    })
    return result
}
export { getAllNotificationsByUser }
