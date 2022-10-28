/**
	@file Contiene la vista del CRUD de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/

import {Vista} from './vista.js'

/**
	Vista del CRUD
	Contiene el formulario de inserción y la tabla de listado.
**/
export class VistaCRUD extends Vista{
	/**
		Constructor de la clase
		@param div {HTMLDivElement} Div principal de la vista.
		@param controlador {Controlador} Controlador de la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.controlador = controlador

		//Hacemos que la VistaCRUD "observe" al Modelo
		//this.controlador.getModelo().registrar(this)

		//Cojo referencias a los elementos del interfaz
		this.iNombre = this.div.getElementsByTagName('input')[0]
		this.iEmail = this.div.getElementsByTagName('input')[1]
		this.btnCancelar = this.div.getElementsByTagName('button')[0]
		this.btnAceptar = this.div.getElementsByTagName('button')[1]

		//Asigno Eventos
		this.btnAceptar.onclick = this.aceptar.bind(this)
	}
	/**
		Atención al click sobre el botón Aceptar de la vista.
	**/
	aceptar(){
		//Validar los campos
		
		//Llamar al Controlador
		this.controlador.aceptarCRUD(this.iNombre.value, this.iEmail.value)
	}
}
