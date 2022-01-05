import { NumbersCollection } from './NumbersCollection'

export class Sorter {
    constructor(public collection: NumbersCollection) { }

    sort(): void {
        const { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let k = 0; length - i - 1 > k; k++) {
                if (this.collection.compare(k, k + 1)) {
                    this.collection.swap(k, k + 1)
                }
            }
        }
    }
}