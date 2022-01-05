import { ISortable } from "./interfaces";
import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter implements ISortable {
    constructor(public data: number[]) {
        super()
    }

    length: number = this.data.length

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex]
    }

    swap(leftIndex: number, rightIndex: number): void {
        const cursor = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = cursor;
    }
}