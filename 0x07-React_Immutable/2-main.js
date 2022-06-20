#!/usr/bin/env node
const accessImmutableObject = require('./2-nested')
console.log(accessImmutableObject({
    name: {
        first: "Guillaume",
        last: "Salva"
    }
}, ['name', 'first']))
