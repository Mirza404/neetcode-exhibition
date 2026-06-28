class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums: number[]): number[] {
        let ans: number[] = [];
        let i: number = 0;
        let length: number = nums.length;
        ans.length = 2*length;
        for (i; i < length; i++) {
            ans[i] = nums[i];
            ans[i+length] = nums[i];
        }

        return ans;
    }
}
