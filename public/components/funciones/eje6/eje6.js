"use strict";
/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 * */
function orden() {
    let ArrayNL = ["b", 6, "a", "q", 7, 2];
    let lta = ArrayNL.slice(0, 1);
    let ltb = ArrayNL.slice(2, 3);
    let ltc = ArrayNL.slice(5, 6);
    let gruposorden = lta.concat(ltb, ltc).sort();
    let num = ArrayNL.filter(Number);
    let numord = num.sort((a, b) => a - b);
    let sorte = gruposorden.concat(numord);
    console.log(sorte);
}
module.exports = orden;
