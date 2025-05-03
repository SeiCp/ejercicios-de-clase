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

const selecione = document.querySelector (.js-select)
const boton = document.querySelector (.js-btn)
const resultado = document.querySelector (js-reult)

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  function generarMovOrdenador() {
    const numeroAleatorio = getRandomNumber(10);
    console.log(numeroAleatorio);
  
    let movOrdenador = '';
  
    /*
    //  2. Obtener el valor del ordenador
    if (numeroAleatorio <= 3) {
      movOrdenador = 'piedra';
    } else if (numeroAleatorio >= 7) {
      movOrdenador = 'papel';
    } else {
      movOrdenador = 'tijera';
    }
    return movOrdenador;
  }


btn.addEventListerner("click", handleClick)