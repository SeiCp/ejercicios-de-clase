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

const resultado = document.querySelector ('.js-result')
const seleccione = document.querySelector ('.js-select')
const btn = document.querySelector ('.js-btn')


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  function handleClick(event) {

    const movJugadora = seleccione.value;
    resultado.innerHTML = movJugadora;
    
    const numeroAleatorio = getRandomNumber(100);
    console.log('Número generado', numeroAleatorio);

    if (numeroAleatorio % 2 === 0) {
      document.body.classList.remove('modo-impar');
    } else {
      document.body.classList.add('modo-impar'); 
    }

  }

btn.addEventListener("click", handleClick)