
function lanzar(numero){
	throw ('No seas supersticioso')
	return true
}

function errar(){
	try{
		let texto = 7
		texto.split(' ')
	}
	catch(error){
		console.log(error)
		console.log(error.stack)
	}
}
errar()
