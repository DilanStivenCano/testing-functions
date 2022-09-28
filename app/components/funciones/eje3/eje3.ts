/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 * 
*/

 function Ordenar() {
   let letras : any[] = [["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"]];

   let letrasa = letras[0].sort();
   let letrasb = letras[1].sort();
   let letrasc = letras[2].sort();

   let letrasConcat = [letrasa, letrasb, letrasc];
   let ordenadas = letrasConcat.sort();
   console.log(ordenadas);

   return ordenadas;
 }

 module.exports = Ordenar;