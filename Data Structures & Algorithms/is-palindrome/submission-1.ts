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
        let formattedString: string = s.toLowerCase();
        //copied from the net, myb even AI (I MEAN THIS HELPER ONLY)
        function isAlphanumeric(c: string): boolean {
            return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");
        }
        while (i < j) {
            //i from back
            charI = s[i];
            charJ = s[j];
            console.log("Char i: ", charI);
            console.log("i: ", i, " and j: ", j);
            if (!isAlphanumeric(charI)) {
                i++;
            }
            if (!isAlphanumeric(charJ)) {
                j--;
            }
            if (charI.toLowerCase() === charJ.toLowerCase()) {
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
