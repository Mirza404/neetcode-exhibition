class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let arr: string[] = [];
        for (let i = 0; i < s.length; i++) {
            arr.push(s[i]);
            if (t.includes(arr[i]) && s.length === t.length) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
