class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    // 1) pocnes od  zadnjeg elementa
    // 2) pogledas arr[i], ako je zadnji, daj mu -1 i stavi localMax=arr[i]
    // 3) onda ides i--, element nize uporedis sa localMaxom
    // 4) Ako je veci arr[i], update localMax to match
    // 5) Ako je localMax sad veci od totalMaxa, update it
    replaceElements(arr: number[]): number[] {
        let i: number = arr.length - 1;
        let localMax: number = 0;
        let totalMax: number = 0;
        let ans: number[] = [];

        for (i; i >= 0; i--) {
            if (arr[i] > localMax) {
                localMax = arr[i];
            }

            if (localMax > totalMax) {
                totalMax = localMax;
            }
            ans[i] = totalMax;
        }
        ans[arr.length - 1] = -1;

        return ans;
    }
}
