"use strict";
/**
 * Ejercicio 9
 * calcular el factorial de un número
 */
function factorial(n) {
    let total = 1;
    for (let i = 1; i <= n; i++) {
        total = total * i;
    }
    console.log(total);
}
factorial(4);
module.exports = factorial;
