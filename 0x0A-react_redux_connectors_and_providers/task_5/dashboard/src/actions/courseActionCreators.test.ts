import '@testing-library/jest-dom';
import { selectCourse, unselectCourse } from './courseActionCreators';
it('selectCourse', () => {
    const expectedResult = {
        type: 'SELECT_COURSE',
        payload: 1
    }
    const result = selectCourse(1)
    expect(expectedResult).toEqual(result)
})

it('unselectCourse', () => {
    const expectedResult = {
        type: 'UNSELECT_COURSE',
        payload: 2
    }
    const result = unselectCourse(2)
    expect(expectedResult).toEqual(result)
})
