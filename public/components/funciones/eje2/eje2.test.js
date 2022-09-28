"use strict";
const DivisiblesFn = require('./eje2');
test('Números pares', () => {
    let pares = [];
    expect(pares).toEqual([2, 4, 6, 8]);
    console.log(pares);
});
test('Números impares', () => {
    let impares = [];
    expect(impares).toEqual([1, 3, 5, 7, 9]);
    console.log(impares);
});
