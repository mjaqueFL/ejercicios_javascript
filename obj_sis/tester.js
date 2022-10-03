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

function test_crearSet(){
	let respuesta = window['crearSet']("hola, cocacola, pterodáctilo")
	if (!(respuesta instanceof Set)) throw ("No es el tipo correcto. Debes devolver un Set")
	if (respuesta.size != 3) throw ('La longitud del set no coincide')
	if (!respuesta.has('hola') || !respuesta.has('pterodáctilo')) throw ("Faltan elementos en el Set")
}

function test_buscarEnSet(){
	let set = new Set()
	set.add(1)
	set.add(42)
	set.add(1289)
	let respuesta = window['buscarEnSet'](set, 42)
	if (!respuesta) throw ("Falla la función")
	respuesta = window['buscarEnSet'](set, 43)
	if (respuesta) throw ("Falla la función")
}

function test_sumarSet(){
	let set = new Set()
	set.add(1)
	set.add(42)
	set.add(2)
	set.add(2)
	set.add(12)
	set.add(-10)
	let respuesta = window['sumarSet'](set)
	if (respuesta!=54) throw ("La suma no es correcta")
}

function test_eliminarDeSet(){
	let set = new Set()
	set.add('alfa')
	set.add('beta')
	set.add('gamma')
	set.add('gamma')
	set.add('delta')
	let respuesta = window['eliminarDeSet'](set, 'gamma')
	if (!(respuesta instanceof Set)) throw ("No es el tipo correcto. Debes devolver un Set")
	if (respuesta.size != 3) throw ('La longitud del set no coincide')
	if (respuesta.has('gamma')) throw ("No has eliminado el texto")
}

function test_eliminarDeSetConFiltro(){
	let set = new Set()
	set.add(13)
	set.add(10)
	set.add(22)
	set.add(25)
	set.add(-1)
	let respuesta = window['eliminarDeSetConFiltro'](set, 17)
	if (!(respuesta instanceof Set)) throw ("No es el tipo correcto. Debes devolver un Set")
	if (respuesta.size != 3) throw ('La longitud del set no coincide')
	if (respuesta.has(22)) throw ("No has eliminado bien los elementos")
}

function test_crearMapa(){
	let claves = ['a', 'b', 'c', 'd']
	let valores = [10, 20, 30, 42]
	let respuesta = window['crearMapa'](claves, valores)
	if (!(respuesta instanceof Map)) throw ("No es el tipo correcto. Debes devolver un Map")
	if (respuesta.size != 3) throw ('La longitud del set no coincide')
	if (respuesta.get('b') != 20) throw ('Los valores no coinciden')
}
