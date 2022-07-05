import { getFooterCopy, getFullYear, getLatestNotification } from './utils'

test('getFullYear function', () => {
    const now = new Date().getFullYear()
    expect(now).toEqual(getFullYear())
});
test('getLatestNotification function', () => {
    const a = '<strong>Urgent requirement</strong> - complete by EOD'
    expect(getLatestNotification()).toEqual(a)
});
test('getFooterCopy function, input: false', () => {
    const a = 'Holberton School main dashboard'
    expect(getFooterCopy(false)).toEqual(a)
})
test('getFooterCopy function, input: true', () => {
    const a = 'Holberton School'
    expect(getFooterCopy(true)).toEqual(a)
})
