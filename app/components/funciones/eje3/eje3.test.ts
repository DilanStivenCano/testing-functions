const OrdenarFn = require('./eje3');

test('Organizar los grupos', () => {
    let letras = [["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"]];
    let letrasa = letras[0].sort();
    let letrasb = letras[1].sort();
    let letrasc = letras[2].sort();

    let letrasConcat = [letrasa, letrasb, letrasc];

    let ordenadas = letrasConcat.sort();

    expect(ordenadas).toEqual([["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"]]);
    console.log(ordenadas);
})