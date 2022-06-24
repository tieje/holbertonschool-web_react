type ContextItemType = {
    guid: string
    isRead: boolean
    type: string
    value: string
}
type AuthorType = {
    first: string;
    last: string;
}
type AuthorItemType = {
    id: string;
    name: AuthorType
    email: string;
    picture: string;
    age: number;
}
type ItemValue = {
    id: string;
    author: AuthorItemType
    context: ContextItemType
}

function getAllNotificationsByUser(data: ItemValue[], userId: AuthorItemType['id']): ContextItemType[] {
    const result: ContextItemType[] = []
    data.forEach((item: ItemValue) => {
        if (item.author.id === userId) {
            result.push(item.context)
        }
    })
    return result
}
function getMessageByGUID(data: ItemValue[], guid: ContextItemType['guid']): ContextItemType | undefined {
    const preResult: ItemValue | undefined = data.find((item: ItemValue) => item.context.guid === guid)
    if (!preResult) { return undefined }
    const result = {}
    return (preResult.context)
}

function getUserByUserId(data: ItemValue[], userId: AuthorItemType['id']): AuthorItemType | undefined {
    const preResult: ItemValue | undefined = data.find((item: ItemValue) => item.author.id === userId)
    if (!preResult) { return undefined }
    return (preResult.author)
}
type getNotificationByIdType = {
    author: AuthorItemType['id']
    context: ContextItemType['guid']
    id: ItemValue['id']
}
function getNotificationById(data: ItemValue[], id: ItemValue['id']): getNotificationByIdType | undefined {
    const preResult: ItemValue | undefined = data.find((item: ItemValue) => item.id === id)
    if (!preResult) return undefined
    const result: getNotificationByIdType = {
        author: preResult.author.id,
        context: preResult.context.guid,
        id: preResult.id
    }
    return (result)
}
function getAllNotificationIDs(data: ItemValue[]): ItemValue['id'][] {
    const result: ItemValue['id'][] = []
    data.forEach((item) => { result.push(item.id) })
    return result
}
export type {
    AuthorItemType
}
export {
    getAllNotificationsByUser,
    getMessageByGUID,
    getUserByUserId,
    getNotificationById,
    getAllNotificationIDs,
}
