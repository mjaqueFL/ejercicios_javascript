/**
	@file Contiene el modelo de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/

/**
	Clase Modelo
	Gestiona los datos de la aplicación.
**/
export class Modelo{
	/**
		Constructor de la clase
	**/
	constructor(){
		this.lista = []
	}
	/**
		Inserta un nuevo registro.
		@param nombre {String} Atributo nombre del nuevo registro
		@param email {String} Atributo email del nuevo registro
	**/
	insertar(nombre, email){
		this.lista.push({'nombre': nombre, 'email': email})
	}
}
