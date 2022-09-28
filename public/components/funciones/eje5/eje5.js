"use strict";
/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */
let arre1 = [1, 2, 3, 4, 5];
let arre2 = [2, 3, 6];
function contain(a, b) {
    let allFounded = b.every((b) => a.includes(b));
    console.log(allFounded);
}
contain(arre1, arre2);
module.exports = contain;
