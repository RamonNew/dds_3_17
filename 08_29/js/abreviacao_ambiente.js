'use strict';

let ambientes = [
    'VTRIA-3-SALA-3004',
    'VTRIA-5-LAB-5109',
    'VTRIA-5-LAB-5111'
];

let pieces = ambientes[0].split('-');
pieces.splice(0,2);
let ambiente = pieces.join('-');
console.log(ambiente);