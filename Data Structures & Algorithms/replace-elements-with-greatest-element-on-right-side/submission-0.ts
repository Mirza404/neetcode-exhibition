class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let i: number = 0;
        let j: number = arr.length-1;
        let tempLargest: number = 0;

        while(i<arr.length-1){
            tempLargest = arr[j];
            if(arr[j-1]>=tempLargest){
                tempLargest = arr[j-1];
                j--;
                continue;
            }
            arr[i] = tempLargest;
            i++;
        }
        arr[arr.length-1] = -1;

        return arr;
    }
}
