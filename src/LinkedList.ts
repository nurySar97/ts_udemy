import { ISortable } from "./interfaces";

class LLNode {
    next: LLNode | null = null;

    constructor(public data: number) { }

}

export class LinkedList implements ISortable {
    head: LLNode | null = null;
    length: number = this.getLength();

    private getLength(): number {
        if (!this.head) {
            return 0
        }

        let length = 1;
        let node = this.head;

        while (node.next) {
            length++
            node = node.next;
        }

        return length
    }

    add(data: number): LinkedList {
        const node = new LLNode(data);

        if (!this.head) {
            this.head = node;
            return this
        }

        let tail = this.head;

        while (tail) {
            if (!tail.next) {
                tail.next = node;
                return this
            }
            tail = tail.next
        }
        return this
    }

    at(index: number): LLNode | null {
        if (!this.head) {
            return null
        }

        let counter = 0;
        let node: LLNode | null = this.head;

        while (node) {
            if (counter === index) {
                return node
            }

            counter++;
            node = node.next;
        }

        return null
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        if (!this.head) {
            throw new Error('List is Empty!')
        }

        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        if (!rightNode) throw new Error('In compare method, cannot find right item!');
        if (!leftNode) throw new Error('In compare method, cannot find left item!');

        return leftNode.data > rightNode.data
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);

        if (!rightNode) throw new Error('In swap method, cannot find right item!');
        if (!leftNode) throw new Error('In swap method, cannot find left item!');

        const leftHand = leftNode.data;

        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }

    print(): void {
        if (!this.head) {
            return
        }

        let node: LLNode | null = this.head;

        while (node) {
            console.log('node: ', node.data);
            node = node.next
        }
    }
}