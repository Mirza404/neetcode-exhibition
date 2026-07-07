class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details: string[]): number {
        let i: number = 0;
        let age: string = "";
        let ageInt: number = 0;
        let output: number = 0;

        for (i; i < details.length; i++) {
            age = details[i].at(11) + details[i].at(12);
            ageInt = Number(age);
            if (ageInt > 60) {
                output++;
            }
        }

        return output;
    }
}
