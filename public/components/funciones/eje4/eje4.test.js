"use strict";
const repetidosFn = require('./eje4');
test('Las palabras repetidas', () => {
    let array1 = ["rat", "dog", "cat", "parrot", "cat"];
    let array2 = ["cat", "lizard", "rat", "cat"];
    let duplicado = [];
    expect(repetidosFn(array1, array2)).toEqual(duplicado);
});
