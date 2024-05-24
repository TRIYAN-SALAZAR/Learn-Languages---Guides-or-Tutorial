function saludar(target: Function){
    target.prototype.saludos = function():void {
        console.log('Hola desde decodadores');
    }
}

@saludar()
class Hola {
    constructor(){

    }
}

let hola1 = new Hola();

hola1.saludos();