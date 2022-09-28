"use strict";
/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let pares = [];
let impares = [];
function Divisibles() {
    for (let i = 0; i < numeros.length; i++) {
        if (i % 2 == 0) {
            impares.push(numeros[i]);
        }
        else {
            pares.push(numeros[i]);
        }
    }
}
module.exports = Divisibles;
