export function bubble_sort(array: number[]): number[] {
    let cursor: number, { length } = array;

    for (let i = 0; i < length; i++) {
        for (let k = 0; length - i - 1 > k; k++) {
            if (array[k] > array[k + 1]) {
                cursor = array[k];
                array[k] = array[k + 1];
                array[k + 1] = cursor;
            }
        }
    }
    return array
}

export class Sorter {
    constructor(public collection: number[]) {

    }

    sort(): void {
        let cursor: number, { length } = this.collection;

        for (let i = 0; i < length; i++) {
            for (let k = 0; length - i - 1 > k; k++) {
                if (this.collection[k] > this.collection[k + 1]) {
                    cursor = this.collection[k];
                    this.collection[k] = this.collection[k + 1];
                    this.collection[k + 1] = cursor;
                }
            }
        }
    }
}
