import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

const numbersCollection = new NumbersCollection([10, -2, 13, 4, 2]);

const sorter = new Sorter(numbersCollection);

console.log('unsorted numbersCollection: ', numbersCollection);

sorter.sort();

console.log('sorted numbersCollection: ', numbersCollection);