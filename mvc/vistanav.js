/**
	@file Contiene el modelo de la vista de menú de navegación de la aplicación
	@author Miguel Jaque <mjaque@migueljaque.com>
	@license GPL-3.0-or-later
**/

/**
	Implementa una vista del menú de navegación.
**/
export class VistaNav{
	/**
		Constructor de la clase.
		@param controlador {Controlador} Controlador de la vista.
		@param nav {HtmlNavElement} Nav de HTML en el que se desplegará la vista.
	**/
	constructor(controlador, nav){
		this.controlador = controlador
		this.nav = nav
		this.liCRUD = this.nav.getElementsByTagName('li')[1]

		this.liCRUD.onclick = this.pulsarCRUD.bind(this)
	}
	/**
		Atención a la pulsación sobre el enlace de CRUD
	**/
	pulsarCRUD(){
		this.controlador.pulsarNavCRUD()
	}
}
