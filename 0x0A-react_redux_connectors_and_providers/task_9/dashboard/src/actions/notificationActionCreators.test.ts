import '@testing-library/jest-dom';
import { Action } from './courseActionTypes';
import { markAsRead, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

it('markAsRead', () => {
    const expectResult: Action = {
        type: MARK_AS_READ.type,
        payload: 1
    }
    const result = markAsRead(1)
    expect(expectResult).toEqual(result)
})
it('setNotificationFilter', () => {
    const expectResult: Action = {
        type: SET_TYPE_FILTER.type,
        payload: 'DEFAULT'
    }
    const result = setNotificationFilter('DEFAULT')
    expect(JSON.stringify(expectResult)).toEqual(JSON.stringify(result))
})
