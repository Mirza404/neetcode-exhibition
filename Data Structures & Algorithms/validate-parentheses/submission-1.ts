class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isValid(s: string): boolean {
        let stack: string[] = [];
        let strayChar: string = "";
        const record: Record<string, string> = {
            "}": "{", // key : value
            "]": "[",
            ")": "(",
        };

        for (let c of s) {
            if (record[c]) {
                // ovo bukv znaci ako je closing
                if (stack.length > 0 && stack.at(-1) === record[c]) {
                    stack.pop();
                } else {
                    stack.push(c);
                }
            } else {
                return false;
            }
        }
        if (stack.length !== 0) {
            return false;
        }
        return true;
    }
}
