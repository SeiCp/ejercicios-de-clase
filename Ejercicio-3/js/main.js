'use strict';

/**
 * Lógica aplicación:
 * Quiero que cuando el usuario selecione y haga update se muestre la opción arriba en grand
 * Preguntas: 
 * ¿Qué tipo de evento debes escuchar? Click
 * ¿A qué elemento deberías añadir ese evento? Btn
 * ¿Qué palabra en JavaScript se usa para escuchar eventos? add event listener
 * PASOS:
 * Declarar las constantes
 */

const saludo = document.querySelector ('.js-saludo')

saludo.innerHTML += "Mundo"
