function mostrarLongitud(objeto: string | number) {
    if(typeof objeto === "string") {
        return objeto.length
    }

    return objeto.toString().length
}

mostrarLongitud("Hola")

// Otro Ejemplo
interface Naruto {
    name: string,
    age: number,
    jump: () => void
}

interface Sasuke {
    name: string,
    age: number,
    run: () => void
}

interface Sakura {
    name: string,
    age: number,
    heal: () => void
}

interface Kakashi {
    name: string,
    age: number,
    attack: () => void
}

type Characters = Sasuke | Naruto | Sakura | Kakashi;

// type guard
function checkCharacter(character: Characters): string | null {
    if((character as Naruto).jump !== undefined) return 'Naruto'
    if((character as Sasuke).run !== undefined) return 'Sasuke'
    if((character as Sakura).heal !== undefined) return 'Sakura'
    if((character as Kakashi).attack !== undefined) return 'Kakashi'
    return null

}
function useCharacter(character: Characters) {
    const characterIs = checkCharacter(character)
    const actionByCharacter = {
        Naruto: (character as Naruto).jump(),
        Sasuke: (character as Sasuke).run(),
        Sakura: (character as Sakura).heal(),
        Kakashi: (character as Kakashi).attack()
    }
    actionByCharacter[characterIs]()
}