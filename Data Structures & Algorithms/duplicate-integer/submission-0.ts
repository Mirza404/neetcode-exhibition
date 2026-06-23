class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let duplicateArr: number[] = [];
        for (let i: number = 0; i <= nums.length; i++) {
            if (duplicateArr.includes(nums[i])) {
                return true;
            }
            duplicateArr.push(nums[i]);
        }
        return false;
    }
}
