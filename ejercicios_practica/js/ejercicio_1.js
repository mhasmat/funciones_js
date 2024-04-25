"use strict";

/* Inove Coding School
 * Ejercicios de funciones
 */

// Ejercicios con funciones

function imprimirMayor(numero1, numero2) {
    console.log("Funcion imprimir mayor")
    // En esta función debe determinar cual de los dos
    // números ingresados por parámetro es mayor
    // y luego imprimir dicho valor en consola

    let mayor = Math.max(numero1, numero2);

    return console.log('El n° mayor ingresado es:', mayor);
}

imprimirMayor(2, 10);