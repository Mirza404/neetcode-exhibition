class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let length: number = s.length;
        let j: number = length;
        let i: number = 0;
        let charI: string = "";
        let charJ: string = "";
        //copied from the net, myb even AI (I MEAN THIS HELPER ONLY)
        function isAlphanumeric(c: string): boolean {
            return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");
        }
        while (i < j) {
            //i from back
            if (!isAlphanumeric(charI)) {
                i++;
            }
            else if (!isAlphanumeric(charJ)) {
                j++;
            }
            else if (j === i) {
                j--;
                i++;
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
