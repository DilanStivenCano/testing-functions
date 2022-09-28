"use strict";
const ordenFn = require('./eje6');
test('Sort', () => {
    let ArrayNL = ["b", 6, "a", "q", 7, 2];
    let lta = ArrayNL.slice(0, 1);
    let ltb = ArrayNL.slice(2, 3);
    let ltc = ArrayNL.slice(5, 6);
    let gruposorden = lta.concat(ltb, ltc).sort();
    let num = ArrayNL.filter(Number);
    let numord = num.sort((a, b) => a - b);
    let sorte = gruposorden.concat(numord);
    expect(sorte).toEqual(["a", "b", "q", 2, 6, 7]);
    console.log(sorte);
});
