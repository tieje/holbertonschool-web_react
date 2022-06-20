/*
import { Map } from 'immutable'
function getImmutableObject(object) { return (Map(object)) }
export default getImmutableObject
*/
const { Map } = require('immutable')
function getImmutableObject(object) { return (Map(object)) }
module.exports = getImmutableObject