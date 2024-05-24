export class Persona {
    public _nombre:string;
    public _apellido:string;
    constructor(nombre:string, apellido:string) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    
    get nombre() {
        return this._nombre
    }

    get apellido() {
        return this._apellido;
    }
}