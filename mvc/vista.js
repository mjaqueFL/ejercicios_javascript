
export class Vista{
	constructor(div){
		this.div = div
	}
	mostrar(ver){
		if (ver)
			this.div.style.display = 'block'
		else
			this.div.style.display = 'none'
	}
}
