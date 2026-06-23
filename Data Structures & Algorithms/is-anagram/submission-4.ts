class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let arr: string[] = [];
        let initLength: number = 0;
        let num: number = 0;
        for (let i = 0; i < s.length; i++) {
            arr.push(t[i]);
            if (s.includes(arr[i]) && s.length === t.length) {
                num = t.indexOf(arr[i]);
                t.slice(num, num + 1);
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
