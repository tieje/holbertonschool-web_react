/*
import { fromJS } from "./node_modules/immutable/dist/immutable"
function getImmutableObject(object) { return (fromJS(object)) }
export default getImmutableObject
*/
const { fromJS } = require('immutable');
function getImmutableObject(object) { return (fromJS(object)) };
module.exports = getImmutableObject;
