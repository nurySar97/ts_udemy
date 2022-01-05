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