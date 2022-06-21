#!/usr/bin/env node
const { printBestStudents } = require('./8-seq.js')
const grades = {
    1: {
        score: 99,
        firstName: 'guillaume',
        lastName: 'salva',
    },
    2: {
        score: 80,
        firstName: 'guillaume',
        lastName: 'salva',
    },
    3: {
        score: 70,
        firstName: 'guillaume',
        lastName: 'salva',
    }
};
console.log(printBestStudents(grades))
