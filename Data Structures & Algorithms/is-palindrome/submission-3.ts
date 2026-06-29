class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let j: number = s.length - 1;
        let i: number = 0;
        let charI: string = "";
        let charJ: string = "";
        let formattedString: string = s.toLowerCase();
        //copied from the net, myb even AI (I MEAN THIS HELPER ONLY)
        function isAlphanumeric(c: string): boolean {
            return (c >= "a" && c <= "z") || (c >= "A" && c <= "Z") || (c >= "0" && c <= "9");
        }
        while (i < j) {
            //j is i from back
            charI = s[i];
            charJ = s[j];
            console.log("Char i: ", charI, "\nChar j: ", charJ);
            if (!isAlphanumeric(charI)) {
                i++;
                continue;
            }
            if (!isAlphanumeric(charJ)) {
                j--;
                continue;
            }
            if (charI.toLowerCase() === charJ.toLowerCase()) {
                j--;
                i++;
                continue;
            } 
            return false;
        }
        return true;
    }
}
