import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';
import { Sorter } from './Sorter';

// Number sorter
const numbersCollection = new NumbersCollection([10, -2, 13, 4, 2]);
const numberSorter = new Sorter(numbersCollection);
console.log('unsorted numbersCollection: ', numbersCollection);
numberSorter.sort();
console.log('sorted numbersCollection: ', numbersCollection);

// Character sorter
const charactersCollection = new CharactersCollection('fsdfafcx');
const characterNumbar = new Sorter(charactersCollection);
console.log('unsorted characterNumbar: ', characterNumbar);
characterNumbar.sort();
console.log('sorted characterNumbar: ', characterNumbar);

// Linked list
const linkedList = new LinkedList();
linkedList.add(1).add(2).add(-1);
const sortedLinkedList = new Sorter(linkedList);
// sortedLinkedList.sort();
console.log('linkedList: ', JSON.stringify(linkedList, null, 3));
