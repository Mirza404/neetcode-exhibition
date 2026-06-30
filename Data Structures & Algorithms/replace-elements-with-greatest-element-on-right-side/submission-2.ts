class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let i: number = 0;
        let j: number = arr.length - 1;
        let tempLargest: number = arr[j];

        do {
            if (arr[j - 1] > tempLargest) {
                tempLargest = arr[j - 1];
                j--;
                continue;
            } else {
                j--;
            }
            if (i >= j) {
                arr[i] = tempLargest;
                i++;
            }
        } while (i < j);
        arr[arr.length - 1] = -1;

        return arr;
    }
}
