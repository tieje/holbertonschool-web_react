//import { fromJS } from './node_modules/immutable/dist/immutable'
//import { getIn } from "./node_modules/immutable/dist/immutable"
const { getIn, fromJS } = require('immutable')
function accessImmutableObject(object, array) {
    return getIn(fromJS(object), array, undefined)
}
/*
export default function accessImmutableObject(object, array) {
    return getIn(fromJS(object), array, undefined)
}
*/
module.exports = accessImmutableObject