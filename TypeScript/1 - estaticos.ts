/*
    Puedes declarar las variables, funciones, etc, de forma estatica o TypeScript por cuenta propia 
    Infiere que tipo de dato asignar, pero con esta segunda debes de tener especial cuidado ya que puede llegar a ocasionarse
    errores a lo largo del tiempo por lo que la mejor opcion seria evitar esto.

    
*/


//DECLARACION DE FORMA ESTATICA
let age: number = 19;
let namePerson: string = 'Sofia';

const person: object = {
    name: namePerson,
    age: age,
    sex: 'F'
}

//De esta forma se infiere

let nombre = 'Alondra';
let edad = 18;

const persona = {
    name: nombre,
    age: edad,
    sex: 'F',
    altura: 1.62
}

/*
    La inferencia puede llegar a tener limites, como ejemplo, los parametros de las funciones, estas toman el valor de "any",
    Lo que nos puede ocasionar serie de errores si no se corrige o se deja sin un tipado estatico
*/

//sin tipado estatico
function calularLatitud(x, y) {
    return x + y;
}

//con tipado estatico
function calularLatitud2(x: number, y: number) {
    return x + y;
}

//Incluso, sin declarar que tipo de dato va a retonar la funcion, esta se infiere de forma correcta en automatico, 
//aunque no esta de mas asignarle un tipo de dato

function calularLatitud3(x: number, y: number): number {
    return x + y;
}

/*
    Tambien puedes crear tus tipados persolalizados con la palabra reservada 'type'
*/

type Pets = {
    name: string;
    age: number;
    sex: string;
}

type Person = {
    name: string;
    age: number;
    sex: string;
    height: number;
}

type arrayPerson = Person[];



const sayHelloFromFunction = (fn: (name: string) => void) => {
    fn('jose');
}

const sayHello = (name: string) => {
    console.log(`hello ${name}`)
}

sayHelloFromFunction(sayHello);


// Formas de tipar arrow functions

const multiply = (x: number, y: number) => x * y;

const multiply1 = (x: number, y: number): number => x * y;

const multiply2: (x: number, y: number) => number = (x, y) => {
    return x * y
};

// Uso de never, este se usa cuando sabes que vas a tener funciones QUE NUNCA VAN A DEVOLVER UN VALOR, NUNCAAAA

function twrowError(message: string): never {
    throw new Error(message);
}

// void, este te da igual si llegase a devolver un valor o no

function generateWorld(): void {
    console.log('The world was generated');
}