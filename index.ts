// Function Declaration
function calculate(x: number, y: number, calc: (x: number, y: number) => number): number {
    return calc(x, y)
}

function divide(a: number, b: number): number {
    return a / b
}

// Function Expression
const multiply = function (a: number, b: number): number {
    return a * b
}
// Arrow functions
const add = (x: number, y: number): number => {
    return x + y
};

const subtract = (x: number, y: number): number => {
    return x - y
};

// Void & Never

// Function returns void
const logger = (message: string): void => {
    console.log(message)
}

// Function never
const throwError = (message: string): never => {
    throw new Error(message)
}

const counter = (i: number = 0): never => {
    while (true) console.log(++i);
}

// Destructuring
const todayWeater = {
    date: new Date(),
    weather: 'summy'
}

const logWeather1 = (forecast: { date: Date, weather: string }): void => {
    console.log(`
    Date: ${forecast.date.toLocaleDateString()}
    Weather: ${forecast.weather}
    `)
}
logWeather1(todayWeater)

// ES2015
const logWeathe2 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(`
    Date: ${date.toLocaleDateString()}
    Weather: ${weather}
    `)
}

logWeathe2(todayWeater)

// Annotation for objects
const profile = {
    name: 'Tom',
    surname: 'Hanks',
    age: 56,
    coords: {
        lat: 1,
        lng: 30
    },
    setAge(age: number): void {
        this.age = age
    },
}

const { age }: { age: number } = profile;

const { coords: { lat, lng } }: { coords: { lat: number, lng: number } } = profile