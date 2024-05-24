"use strict";
class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
    }
    get nombre() {
        return this._nombre;
    }
    getEdad() {
        return this._edad;
    }
    static metodoEstatico() {
        return 10;
    }
}
let persona1 = new Persona('Jorge', 18);
console.log(persona1.nombre);
console.log(persona1.getEdad());
console.log('Metodo estatico ' + Persona.metodoEstatico());
