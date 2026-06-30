class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let i: number = 0;
        let j: number = arr.length - 1;
        let tempLargest: number = arr[j];

        while (i < j) {
            if (arr[j - 1] >= tempLargest) {
                tempLargest = arr[j - 1];
                j--;
            } else{
                j--;
                continue;
            }
            console.log("i:", i, " j:", j);
            arr[i] = tempLargest;
            i++;
        }
        arr[arr.length - 1] = -1;

        return arr;
    }
}
