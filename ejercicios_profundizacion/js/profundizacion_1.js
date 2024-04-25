"use strict";
/**
 * @fileoverview Ejercitación de Funciones
 * @author       Inove coding School <alumnos@inove.com.ar>
 * @copyright    www.inove.com.ar
 *
 * Consignas:
 * Deberá enlazar este archivo javascript al documento HTML.
 * Del ejercicio visto en clase, realizar los cambios necesarios para que el sistema
 * admita:
 * 
 * 1. En la función promedio():
 *    Debe recibir 5 números como argumento y calcular el promedio.  Debe reportar por
 *    medio de alert(); y console.log(); el detalle de los datos recibidos.
*/

function promedio(num1, num2, num3, num4, num5) {
    console.log("Funcion promedio")
    
    let promedio = ((num1+num2+num3+num4+num5)/5);

    alert(`El promedio entre ${num1}, ${num2}, ${num3}, ${num4} y ${num5} es: ${promedio}`);

    console.log(`El promedio entre ${num1}, ${num2}, ${num3}, ${num4} y ${num5} es: ${promedio}`);

    return promedio;
}

promedio(10, 5, 7, 8, 2);