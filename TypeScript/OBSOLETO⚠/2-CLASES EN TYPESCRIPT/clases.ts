class Persona{
    private _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number){
        this._nombre = nombre;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }

    getEdad():number {
        return this._edad;
    }

    static metodoEstatico():number {
        return 10;
    }
}

let persona1 = new Persona('Jorge', 18);
console.log(persona1.nombre);
console.log(persona1.getEdad());

console.log('Metodo estatico ' + Persona.metodoEstatico());