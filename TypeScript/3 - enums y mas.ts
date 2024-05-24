// Para usar enums, siempre debe ser una coleccion de datos finitos
enum ERROR_TYPES {
    unauthorized,
    forbidden,
    notFound,
    serverError
}

const enum ERROR_TYPES_2 {
    unauthorized = 'unauthorized',
    forbidden = 'forbidden',
    notFound = 'notFound',
    serverError = 'serverError'
}

enum ERROR_TYPES_3 {
    unauthorized = 768,
    forbidden = 403,
    notFound = 404,
    serverError = 500
}

// ________________________________________________________________________________________________________________________________________________________________
// Aserciones de tipos

const canva = document.getElementById('canvas'); 
//No sabemos el tipo de elemento que va a ser recuperado, por lo que infiere el tipo de dato mas general
// En este caso el tipo de dato es HTMLElement


// Con el asercion de tipo, podemos hacer lo siguiente
const canvas = document.getElementById('canvas') as HTMLCanvasElement; //Esta bien esto, pero es mejor hacer la asercion despues de una comprobacion
if(canvas !== null) canvas.getContext('2d');

const canvas2 = document.getElementById('canvas2');
if(canvas2 !== null) (canvas2 as HTMLCanvasElement).getContext('2d'); //Esta forma es mejor


// Y aun con todo esto en mente, debemos de cuidar que el elemento a recuperar si sea de la instancia que queramos
// Para evitar errores a futuro, continunando con el mismo ejemplo

const canvas3 = document.getElementById('span');
if(canvas3 !== null) (canvas3 as HTMLCanvasElement).getContext('2d'); //No puede direnciar que sea de la misma instancia, porque no sabemos el elemonto que se recupera

// Por ello verificamos que el elemento recuperado si sea de la misma instancia con la que queremos trabajar

// Esto es inferencia -> TypeScript se da cuenta dentro del if, 
// que ya solo el canvas va a ser del tipo HTMLCanvasElement

if(canvas3 !== null && canvas3 instanceof HTMLCanvasElement) canvas3.getContext('2d');
// Con esto aseguramos que sea el elemento con el que queramos trabajar

// o visto de mejor forma
if(canvas3 instanceof HTMLCanvasElement) canvas3.getContext('2d');

// Aunque tambien se puede deducir el elemento usando querySelector, pero hay que tener cuidado y no fiarse
const canvas4 = document.querySelector('canvas');

// ________________________________________________________________________________________________________________________________________________________________
// Fetching 

import { APIGitHubRepositories } from './3.1 - APIResponseGitub';

async function getData() {
    // en un archivo puedes usar la extension .mts si no quieres escribir una funcion asincrona por completo
    // pero esto no es parte de la especificacion de typescript, si no de node
    const response = await fetch('https://api.github.com/search/repositories?q=javascript');


    // No hay que hacer un tipado personalizado manual, hay muchas extensiones que facilitan el trabajo
    // Por ejemplo usar quickType, pero esto no es seguro, ya que siempre pueden haber cambios en la API
    const data = await response.json() as APIGitHubRepositories;
    let list = 0;
    const repos = data.items.map(repo => console.log(`repository ${++list}: ${repo.full_name} \n`)); 
    
}