#!/usr/bin/env node
const { getListObject, addElementToList } = require('./3-list.js')
const a = [1, 2, 3]
const immutableA = getListObject(a)
console.log(immutableA)
const addElementA = addElementToList(immutableA, 4)
console.log(addElementA)
