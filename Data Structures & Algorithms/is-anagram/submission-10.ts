class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let arrS: string[] = [];
        let arrT: string[] = [];
        let length: number = 0;

        let sTemp: string = "";
        let tTemp: string = "";
        let i: number = 0;

        if (s.length === t.length) {
            length = s.length;
        } else {
            return false;
        }

        for (i = 0; i < s.length; i++) {
            sTemp = s.slice(i, i + 1);
            tTemp = t.slice(i, i + 1);

            arrS.push(sTemp);
            arrT.push(tTemp);
        }

        arrS.sort();
        arrT.sort();

        for (i = 0; i < s.length; i++) {
            if (arrS[i] === arrT[i]) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
