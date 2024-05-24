class Avenger {
    readonly name: string;
    alias: string;
    power: number = 0;
    protected isAlive: boolean = true;
    private livesIn: string = 'Earth';

    constructor(name: string, alias: string, power: number, isAlive?: boolean, livesIn?: string) {
        this.name = name;
        this.alias = alias;
        this.power = power;
        this.isAlive = isAlive;
        this.livesIn = livesIn;
    }

    get presentation() {
        return `I'm ${this.alias}`;
    }

    get showPower() {
        return `My power is ${this.power}`
    }

    set powerHero(power: number) {
        this.power = power;
    }

    get region() {
        return this.livesIn;
    }

    set region(region: string) {
        this.livesIn = region;
    }
}

//get para leer y set para modificar (Basicamente)

const Spiterman = new Avenger('spiterman', 'Peter Parker', 100, true, 'Earth');
console.log(Spiterman.region);
