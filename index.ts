// number
let orangesCount: number = 5;

// string
let speedType: string = 'fast';

// boolean
let hasDog: boolean = null;

// null
const nothing: null = null;

// undefined
const never: undefined = undefined;

// built-in objects
const today: Date = new Date()

// array
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3, 4, 5];
let results: boolean[] = [true, true, false];

// classes
class Car {
    name: string = 'Toyota';
    model: string = 'Avalon';

    get fullName(): string {
        return this.name + ' ' + this.model
    }
}

let car: Car = new Car();

// object literal
let point: { x: number, y: number } = {
    x: 10,
    y: -35
}