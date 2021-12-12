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

// function literals

const logNumber: (i: number) => void = (i: number) => {
    if (i <= 0) console.error('i should be bigger than zero!')
    for (let k = 0; i > k; k++) console.log(k);
}

//  any literal
// 1) Function returns any type - JSON.parse retuns type any
const json = `{"x":10, "y":20}`;
const coords: { x: number, y: number } = JSON.parse(json);

console.log(coords);

// 2) When we declare a variable on one line and initialize it later
let words = ['one', 'two', 'tree'];
let isTwo = false;

for (let i of words) {
    if (i === 'two') {
        isTwo = true
    }
}
console.log(isTwo);
// 3) Variables whoes type  can not be inferred
let myNumbers = [-10, -1, 12];
let positiveNumber: number | boolean;

for (let i of myNumbers) {
    if (i > 0) {
        positiveNumber = i
    }
}