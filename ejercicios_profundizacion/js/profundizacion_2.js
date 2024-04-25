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
 * 2. En la función generarInvitados():
 *    Crear una variable global que indique si se debe solicitar 1, 2 o 3 nombres de invitados.
 *    Según la cantidad especificada utilice condicionales para solicitar la cantidad de nombres
 *    correctos.
*/

let cantidadInvitados = parseInt(prompt('Indique cantidad de invitados:'));

function generarInvitados(cantidad) {
    let invitados = [];

    for(let i=0; i<cantidad; i++) {
        let invitado = prompt(`Ingrese el nombre del invitado n°${i+1}:`);
        invitados.push(invitado);
    }
    console.log(invitados);    

    return invitados;
}

let lista = generarInvitados(cantidadInvitados);
console.log(`Mis invitados: ${lista}`)