"use strict";
/**
 * Ejercicio 8
 * dado un arreglo de ideas, donde estas pueden ser buenas o malas, imprima un mensaje con las
 * siguientes condiciones:
 * - si el arreglo no contiene ninguna buena idea entonces el mensaje es "fallo"
 * - si el arreglo contiene 1 o 2 buenas ideas entonces el mensaje es "publicar"
 * - si el arreglo contiene más de 2 buenas ideas entonces el mensaje es "fantastico"*/
let Ideas = ["buena", "buena", "buena", "buena", "mala"];
function calificador(a) {
    var contador = 0;
    let i = 0;
    while ((i = Ideas.indexOf("buena", i) + 1) > 0) {
        contador++;
    }
    if (contador === 0) {
        console.log("falló");
    }
    if (contador === 1 || contador === 2) {
        console.log("publicar");
    }
    if (contador > 2) {
        console.log("fantástico");
    }
}
calificador(Ideas);
module.exports = calificador;
