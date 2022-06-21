#!/usr/bin/env node
const { areMapsEqual } = require('./7-equality.js')
const { Map } = require('immutable')
const map1 = new Map(
    {
        firstName: 'Guillaume',
        lastName: 'Salva',
    }
);
const map2 = new Map(
    {
        firstName: 'Guillaume',
        lastName: 'Salva',
    }
);

areMapsEqual(map1, map2);