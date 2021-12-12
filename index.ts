const drink = {
    color: 'brown',
    carbonate: true,
    sugar: 40
}

type Drink = [string, boolean, number];

const late: Drink = ['brown', false, 25];
const sprite: Drink = ['clear', true, 30];
const americano: Drink = ['black', false, 0];


const carSpecs: [number, number] = [400, 3354];

const carSpecedObj: {
    horsepower: number,
    weight: number
} = {
    horsepower: 400,
    weight: 3354
}

let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
let physics: [string, ...number[]] = ["Physics", 5, 5, 5];