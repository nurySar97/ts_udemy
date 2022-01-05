import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

// Number sorter
const numbersCollection = new NumbersCollection([10, -2, 13, 4, 2]);
console.log('unsorted numbersCollection: ', numbersCollection);
numbersCollection.sort();
console.log('sorted numbersCollection: ', numbersCollection);

// Character sorter
const charactersCollection = new CharactersCollection('fsdfafcx');
console.log('unsorted characterNumbar: ', charactersCollection);
charactersCollection.sort();
console.log('sorted characterNumbar: ', charactersCollection);

// Linked list
const linkedList = new LinkedList();
linkedList.add(1).add(2).add(-1);
linkedList.sort();
console.log('linkedList: ', JSON.stringify(linkedList, null, 3));
