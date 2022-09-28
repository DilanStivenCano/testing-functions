const repetidosFn = require('./eje4');

test('Las palabras repetidas', ()=>{

    let array1: string[] = ["rat", "dog", "cat", "parrot", "cat"]
    let array2: string[] = ["cat", "lizard", "rat", "cat"]
    let duplicado : string[] = [];


    expect(repetidosFn(array1, array2)).toEqual(duplicado);
});