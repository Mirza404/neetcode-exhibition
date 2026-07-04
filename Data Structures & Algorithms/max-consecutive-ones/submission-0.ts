class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let i: number = 0;
        let numOfCons: number = 0;
        let tempIsCons: boolean = false;

        for (i; i < nums.length; i++) {
            if (nums[i] === 1) {
                tempIsCons = true;
            } else {
                numOfCons = 1;
                tempIsCons = false;
                continue;
            }
            if (tempIsCons === true) {
                numOfCons++;
            }
        }

        return numOfCons;
    }
}
