import {Modelo} from './modelo.js'

import {VistaNav} from './vistanav.js'
import {VistaInicio} from './vistainicio.js'
import {VistaCRUD} from './vistacrud.js'
/**
 * Controlador de la aplicación
 */
class Controlador{
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
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
	pulsarNavCRUD(){
		this.vistaInicio.mostrar(false)
		this.vistaCRUD.mostrar(true)
	}
	aceptarCRUD(nombre, email){
		this.modelo.insertar(nombre, email)
	}
}

const app = new Controlador()
