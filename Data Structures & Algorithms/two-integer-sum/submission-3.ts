class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i: number = 0;
        let j: number = 0;
        let length: number = nums.length;
        let index: number = 0;
        //first sum is num[i]
        let secondSum: number = 0;

        for (i; i < length; i++) {
            secondSum = target - nums[i];
            index = nums.indexOf(secondSum);
            if (nums[i] + secondSum === target) {
                if (nums.includes(secondSum) && i!==index) {
                    return [i, index];
                }
            }
        }
        return [-1, -1];
    }
}