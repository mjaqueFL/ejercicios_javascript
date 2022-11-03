/**
	@file Contiene la vista del Juego de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/

import {Vista} from './vista.js'

/**
	Vista del Juego
	Contiene el juego de frontón
**/
const ALTO = 600
const ANCHO = 800
const JUGADOR_ALTO = 20
const JUGADOR_ANCHO = 100
const JUGADOR_VELOCIDAD = 5
const PELOTA = 15

export class VistaJuego extends Vista{
	/**
		Constructor de la clase
		@param div {HTMLDivElement} Div principal de la vista.
		@param controlador {Controlador} Controlador de la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.controlador = controlador
		this.pelota = {
 			x: ANCHO/2 - PELOTA/2,
			y: ALTO - JUGADOR_ALTO - 10 - PELOTA,
			velocidad: [1,-2]
		}
		this.jugador = {
			x: ANCHO/2 - JUGADOR_ANCHO/2,
			y: ALTO - JUGADOR_ALTO - 10, 
			velocidad: 0 
		}
		this.crear()
		this.animador = setInterval(this.animar.bind(this), 5)

		//capturamos los eventos de teclado
		window.onkeydown = this.pulsar.bind(this)
		window.onkeyup = (() => this.jugador.velocidad = 0)
	}
	/**
	 * Atención a la pulsación de teclado.
	 * @param evento {Event} Evento de teclado
	 **/
	pulsar(evento){
		console.log('Pulsado...', evento.keyCode)
		switch(event.keyCode){
			case 65:	//a
				this.jugador.velocidad = -JUGADOR_VELOCIDAD
				break;
			case 68:	//d
				this.jugador.velocidad = JUGADOR_VELOCIDAD
				break;
		}
	}
	/**
	 * Crea el interfaz de juego
	 **/
	crear(){
		this.divAreaJuego = document.createElement('div')
		this.div.appendChild(this.divAreaJuego)
		this.divAreaJuego.style.width = ANCHO + 'px'
		this.divAreaJuego.style.height = ALTO + 'px'
		this.divAreaJuego.style.backgroundColor = 'black'
		this.divAreaJuego.style.position = 'relative'

		this.divJugador = document.createElement('div')
		this.divAreaJuego.appendChild(this.divJugador)
		this.divJugador.style.width = JUGADOR_ANCHO + 'px'
		this.divJugador.style.height = JUGADOR_ALTO + 'px'
		this.divJugador.style.backgroundColor = 'white'
		this.divJugador.style.position = 'absolute'
		this.divJugador.style.top = this.jugador.y + 'px'
		this.divJugador.style.left = this.jugador.x + 'px'
		
		this.divPelota = document.createElement('div')
		this.divAreaJuego.appendChild(this.divPelota)
		this.divPelota.style.width = PELOTA + 'px'
		this.divPelota.style.height = PELOTA + 'px'
		this.divPelota.style.backgroundColor = 'yellow'
		this.divPelota.style.position = 'absolute'
		this.divPelota.style.top = this.pelota.y + 'px'
		this.divPelota.style.left = this.pelota.x + 'px'
		this.divPelota.style.borderRadius = PELOTA/2 + 'px'
	}
	animar(){
		//Cambio la posición de la pelota
		this.pelota.x += this.pelota.velocidad[0]
		this.pelota.y += this.pelota.velocidad[1]
		//Cambio la posición del jugador
		this.jugador.x += this.jugador.velocidad

		//Comprobamos los bordes
		if(this.pelota.y <= 0)
			this.pelota.velocidad[1] *= -1
		if(this.pelota.x >= (ANCHO - PELOTA))
			this.pelota.velocidad[0] *= -1

		//Dibujo la pelota
		this.divPelota.style.top = this.pelota.y + 'px'
		this.divPelota.style.left = this.pelota.x + 'px'

		//Dibujo el jugador
		this.divJugador.style.left = this.jugador.x + 'px'
	}

}

