
export abstract class Sorter {
    abstract length: number
    abstract compare(leftIndex: number, rightIndex: number): boolean
    abstract swap(leftIndex: number, rightIndex: number): void

    sort(): void {
        const { length } = this;

        if (length === 1) return

        for (let i = 0; i < length; i++) {
            for (let k = 0; length - i - 1 > k; k++) {
                if (this.compare(k, k + 1)) {
                    this.swap(k, k + 1)
                }
            }
        }
    }
}