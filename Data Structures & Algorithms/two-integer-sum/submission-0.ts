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
        //first sum is num[i]
        let secondSum: number = 0;

        for (i; i < length; i++) {
            secondSum = target - nums[i];
            if (nums[i] + secondSum === target) {
                return [i, nums.indexOf(secondSum)];
            }
        }

    }
}
