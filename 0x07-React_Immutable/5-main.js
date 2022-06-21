#!/usr/bin/env node
const { concatElements, mergeElements } = require('./5-merge.js')
const a = [1, 2, 3]
const b = [4, 5, 6]
const greeting = {
    hello: 1,
    hey: 2,
    hi: 3,
}
const names = {
    tj: 1,
    m: 3,
    k: 4
}
console.log(concatElements(a, b))
console.log(mergeElements(greeting, names))
