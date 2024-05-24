// type Heroe = {
//     name: string,
//     age: number,
//     power: number
// }

// Una interfaz es lo mismo que un type, pero con ligeras diferencias
// En una interfaz se define la forma que un objeto deberia de tener, no sabemos exactamente como va a ser el objeto
// Pero si sabemos que va a ser de la forma que queramos

interface Heroe {
    name: string,
    age: number,
    power: number
}

const hero: Heroe = {
    name: 'Spiderman',
    age: 30,
    power: 10
}

interface Producto {
    id: string,
    name: string,
    price: number,
    inStock: boolean
}

// Con las interfaces se pueden extender, algo que los types no pueden hacer exactamente
interface PC extends Producto {
    ram?: number,
    disk?: number,
    color: string
    size: number
}

interface CarritoDeCompras {
    totalPrice: number,
    productos: PC[]
}

// Las interfaces se pueden anidar
const carritto: CarritoDeCompras = {
    totalPrice: 1000,
    productos: [
        {
            id: '1',
            name: 'Laptop',
            price: 1000,
            inStock: true,
            size: 16,
            color: 'black'
        }
    ]
}

// Indicar funciones en las interfaces, para lo cual tenemos dos formas
interface FormaUno {
    add: (product: Producto | PC) => void,
    remove: (id: string) => void,
    clear: () => void
}

interface FormaDos {
    add(product: Producto | PC): void,
    remove(id: string): void,
    clear(): void
}