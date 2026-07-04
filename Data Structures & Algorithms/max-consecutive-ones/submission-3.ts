class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let i: number = 0;
        let maxNumOfCons: number = 0;
        let currentNumOfCons: number = 0;

        for (i; i < nums.length; i++) {
            if (nums[i] === 1) {
                currentNumOfCons++;
            } else {
                currentNumOfCons = 0;
            }
            if (currentNumOfCons > maxNumOfCons) {
                maxNumOfCons = currentNumOfCons;
                continue;
            }
        }

        return maxNumOfCons;
    }
}
