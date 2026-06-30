class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let i: number = arr.length - 1;
        let maxSeenSoFar: number = 0;

        while (i > 0) {
            maxSeenSoFar = arr[i];
            console.log("Default: ", i, " ", maxSeenSoFar);
            if (arr[i - 1] > maxSeenSoFar) {
                console.log("if arr[i-1]", arr[i - 1], " larger than: ", maxSeenSoFar);
                maxSeenSoFar = arr[i - 1];
                i--;
                arr[i] = maxSeenSoFar;
            } else {
                console.log("not larger", arr[i], ": ", maxSeenSoFar);
                i--;
            }
        }

        arr[arr.length - 1] = -1;

        return arr;
    }
}
