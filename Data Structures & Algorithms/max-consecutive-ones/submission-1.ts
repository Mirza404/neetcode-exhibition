class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
        let i: number = 0;
        let maxNumOfCons: number = 0;
        let currentNumOfCons: number = 0;
        // let tempIsCons: boolean = false;

        // for (i; i < nums.length; i++) {
        //     if (nums[i] === 1) {
        //         tempIsCons = true;
        //     } else {
        //         numOfCons = 1;
        //         tempIsCons = false;
        //         continue;
        //     }
        //     if (tempIsCons === true && nums[i+1]===1) {
        //         numOfCons++;
        //     }
        // }

        for (i; i < nums.length; i++) {
            if (nums[i] === 1) {
                currentNumOfCons++;
            } else {
                currentNumOfCons = 0;
            }
            if (currentNumOfCons > maxNumOfCons) {
                maxNumOfCons = currentNumOfCons;
                currentNumOfCons = 0;
                continue;
            }
        }

        return maxNumOfCons;
    }
}
