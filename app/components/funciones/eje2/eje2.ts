/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */


 let numer : number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 let pares : number[] = [];
 let impares : number[] = [];

 function Divisibles() {
    for (let i = 0; i <numer.length; i++) {
        if (i % 2==0) {
            impares.push(numer[i])
        }
        else{
            pares.push(numer[i])
        }
    }
 }

 module.exports = Divisibles;