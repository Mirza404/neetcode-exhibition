class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let arrS: string[] = [];
        let arrT: string[] = [];
        if()

        if (s.length === t.length) {
            for (let i: number = 0; i < s.length; i++) {
                arrS.push(s.slice(i, i + 1));
                arrT.push(t.slice(i, i + 1));
            }

            if (arrS.sort() === arrT.sort()) {
                return true;
            }
        }
        return false;
    }
}
