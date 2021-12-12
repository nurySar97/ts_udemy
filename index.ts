// array with string
const colors: string[] = ['red', 'green', 'blue'];

// array with dates
const dates: Date[] = [new Date(), new Date()];

// array with array
const fruitsByColor1 = [
    ['tomato'],
    ['apple'],
    ['lemon']
]

const fruitsByColor2: string[][] = [
    ['tomato'],
    ['apple'],
    ['lemon']
]

// Help with inference when extracting values
const color = colors[0];
const color1 = colors.pop();

// Prevent incompatible values
// colors.push(true);

// Help with 'map'
const resultColorsToUppercase = colors.map((color: string): string => {
    return color.toUpperCase()
})

// Array with flexible types
const importantDates: (Date | string)[] = [new Date()];

importantDates.push('2021-11-11')