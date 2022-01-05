import { ISortable } from './interfaces';

export class Sorter {
    constructor(public collection: ISortable) { }

    sort(): void {
        const { length } = this.collection;

        if (length === 1) return

        for (let i = 0; i < length; i++) {
            for (let k = 0; length - i - 1 > k; k++) {
                if (this.collection.compare(k, k + 1)) {
                    this.collection.swap(k, k + 1)
                }
            }
        }
    }
}