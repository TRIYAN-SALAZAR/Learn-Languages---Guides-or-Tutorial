let saludo:string = "Hola mundo desde TypeScript";
let ejemplo2 = "Hola mundo otra vez";

/*los tipos de datos en TS son estrictos , por lo que si queremos asginar un valor a los dos ejemplos anterios,
 nos va a mandar un error de que no se pude asignar un valor del tipo number a una variable del tipo string

 si queremos hacer lo siguiente:
 ejemplo2 = 23;

 por la terminal nos arroja el siguiente resultado:
 funciones.ts:10:1 - error TS2322: Type 'number' is not assignable to type 'string'.

 ejemplo2 = 23;

 lo que quiere decir que es un error al querer asignar un tipo de dato erroneo
*/

/*
    no se pueden dejar variables sin inizializar a menos que se les especifique el tipo de dato.
    por lo que no se puede de la siguiente forma:

    let numero;

    esto arroja un error. 
    lo correcto seria hacer lo siguiente, de esta forma se le puede asignar un numero mas adelante.
*/

let numero:number;

//otro tipo de dato usado es 'any', al cual se le puede asignar cualquier tipo de valor, pero se debe de tener cuidado al hacer uso de este ya que por algo se usa typescript

let cualquierTipo:any;
cualquierTipo = 'jbfazsjbvlb ubea bv';
cualquierTipo = 9873287328743;

//constantes

const PI:number = 3.14;
//al usar constantes se recomienda definirlas en mayusculas(AAAAAAAAA) y los espacios con guion bajo (_)
