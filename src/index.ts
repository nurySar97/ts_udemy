import { bubble_sort, Sorter } from './bubble_sort';

console.log(bubble_sort([5, 1, 2, 4, 6, 1]));

const sorter = new Sorter([1, 3, 4, 2, 7, 2]);

console.log('random collection: ', sorter);
sorter.sort();
console.log('sorted collection: ', sorter);