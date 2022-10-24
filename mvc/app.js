/**
	@file Contiene el controlador principal de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/
import {Modelo} from './modelo.js'

import {VistaNav} from './vistanav.js'
import {VistaInicio} from './vistainicio.js'
import {VistaCRUD} from './vistacrud.js'
/**
 * Controlador de la aplicación
 */
class Controlador{
	/**
		Constructor de la clase
		Llama al método iniciar al cargarse la página
	**/
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
	/**
		Inicia la aplicación
		Crea el modelo y las vistas.
	**/
	iniciar(){
		this.modelo = new Modelo()

		this.nav = document.getElementsByTagName('nav')[0]
		this.divInicio = document.getElementById('divInicio')
		this.divCRUD = document.getElementById('divCRUD')

		this.vistaNav = new VistaNav(this, this.nav)
		this.vistaInicio = new VistaInicio(this.divInicio)
		this.vistaCRUD = new VistaCRUD(this.divCRUD)

		this.vistaInicio.mostrar(true)
	}
	/**
		Atención a la pulsación del enlace al CRUD en el menú de navegación.
	**/
	pulsarNavCRUD(){
		this.vistaInicio.mostrar(false)
		this.vistaCRUD.mostrar(true)
	}
	/**
		Atención al click en el botón Aceptar del CRUD.
		Inserta el elemento en el modelo.
		@param nombre {String} Nombre del elemento a registrar
		@param email {String} Correo electrónico del elemento a registrar
	**/
	aceptarCRUD(nombre, email){
		this.modelo.insertar(nombre, email)
	}
}

const app = new Controlador()
