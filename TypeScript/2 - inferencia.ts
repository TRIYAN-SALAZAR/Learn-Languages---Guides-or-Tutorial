// Inferencia de funciones anonimas segun el contexto
const AVENGERS =['Hulk', 'Thor', 'Captain America'];

// AVENGERS.forEach( avenger => {
//     console.log(avenger.toUpperCase())
// });


// Objetos

let hero = {
    name: 'Spiderman',
    age: 30
}

// hero.power = 10; Property power does not exist on type 

function createHero(name: string, age: number) {
    return {
        name: name,
        age: age
    }
}

const ironman = createHero('Ironman', 45);

// Lo anterior visto nunca sabremos si el tipo de dato es el mismo o no
// Por ello aqui entra en accion "Type Alias"

type HeroId = `${string}-${string}-${string}-${string}-${string}`;

// usando un tipo de dato dentro otro tipo de dato
type Hero = {
    readonly id?: HeroId,
    name: string,
    age: number,
    isActive?: boolean,
    power?: PowerScale | number
}

const thor: Hero = {
    name: 'Thor',
    age: 1000
}

function newFormCreateHero(hero: Hero): Hero {
    const { name, age } = hero;

    return {
        id: crypto.randomUUID(),
        name: name,
        age: age,
        isActive: true
    }
}

const hulk = newFormCreateHero({name: 'Hulk',age: 40});
// Ahora si podemos constar que el tipo de dato es el mismo
//como dato, cuando creamos un tipo de dato, siempre, SIEMPRE, se usa pascalCase para el nombre

// readonly sirve para hacer que un atributo sea solo lectura


// templates union types
type HexadecimalColor = `#${string}`;

const color: HexadecimalColor = '#ff23f4';
// const colorMal: HexadecimalColor = 'ab3b9e';  esto te arrojara un error


// Union Types
type PowerScale = 'local' | 'planetary' | 'galactic' | 'mutiversal' | 'universale' | 'unkown';
type RegionContinent = 'North America' | 'South America' | 'Europe' | 'Africa' | 'Asia' | 'Australia';

hulk.power = 'unkown';

// Intersection Types

type CreaturesBasicInfo = {
    name: string,
    age: number
}

type CreaturesInfo = {
    strength?: number,
    velocity?: number | string,
    power?: PowerScale,
    weight?: number,
    size?: number,
    color?: string,
    zone?: RegionContinent,
    description?: string,
    captured?: boolean,
    isAlive?: boolean
}

// Aqui se realiza la union de los dos tipos de datos
type Creature = CreaturesBasicInfo & CreaturesInfo;

function registerCreature(creature: CreaturesBasicInfo): Creature {
    const { name, age } = creature;
    return {
        name: name,
        age: age,
        ...creature
    }
}

const creatureOne: Creature = registerCreature({name: 'Kaiuju uno', age: 120});

// type from value 
const address = {
    planet: 'Earth',
    region: 'North America',
    country: 'Mexico'
}

type Address = typeof address;

const addressTwice: Address = {
    planet: 'Earth',
    region: 'Asia',
    country: 'japan'
}
// de esta forma podemos crear tipos haciendo uso de objetos

// type from return function
function createAddress() {
    return {
        planet: 'Earth',
        region: 'North America',
        country: 'Mexico'
    }
}

type AddressFunctionc = ReturnType<typeof createAddress>;

// Arrays

const languages: Array<string> = [];
languages.push('Typescript');

const countrys: (string | number)[] = [];
countrys.push('Mexico');
countrys.push(78);

/*
    game board:
    [
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', 'O', 'X']
    ]
*/

type CellValue = 'X' | 'O' | '';
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

// A esto de arriba se le llama una tupla

const tresEnRayaOGato: GameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', 'O', 'X']
]

// Ejemplo de tupla
type RGB = [number, number, number];
const rgb: RGB = [255, 55, 25]; // 0 <-> 255

export {createHero, registerCreature, newFormCreateHero}
export {Hero, Creature, CreaturesInfo, CreaturesBasicInfo, PowerScale, RegionContinent, HeroId}

