export class VistaNav{
	constructor(controlador, nav){
		this.controlador = controlador
		this.nav = nav
		this.liCRUD = this.nav.getElementsByTagName('li')[1]

		this.liCRUD.onclick = this.pulsarCRUD.bind(this)
	}
	pulsarCRUD(){
		this.controlador.pulsarNavCRUD()
	}
}
