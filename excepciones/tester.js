'use strict'

window.onload = iniciar

function iniciar(){
	for(let boton of document.getElementsByTagName('button'))
		boton.onclick = probar
}

function probar(evento){
	try{
		let test = window['test_' + evento.target.getAttribute('data-test')]
		if (!test) throw 'Test desconocido'
		test()
		evento.target.style.backgroundColor = 'green'
	}
	catch(ex){
		fallar(ex, evento.target)
	}
}

function fallar(excepcion, boton){
	console.error(excepcion)
	boton.style.backgroundColor = 'red'
}

function test_lanzar(){
	let respuesta;
	try{
		respuesta = window['lanzar'](7)
		if (!respuesta) throw ("No devuelve el valor correcto.")
		window['lanzar'](7)
	}
	catch(excepcion){
		if (excepcion != 'No seas supersticioso')
			throw ('No se lanza la excepción correcta.')
		return
	}
	throw ("No se lanza la excepción.")
}
