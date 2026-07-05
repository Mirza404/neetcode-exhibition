class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

    // 1) ako je obicni broj, dodaj ga u RECORD (Da li ovo znaci array il nest drugo?)
    // 2) ako je C, brisi zadnji entry
    // n) final calculation: if (operations[i] !== "C" && operations[i] !== "D" && operations[i] !== "+") {
    // If it's none of those, it must be a number!}

    ifNumber(num: unknown): boolean {
        if (num !== "C" && num !== "D" && num !== "+") {
            return true;
        }
        return false;
    }

    calPoints(operations: string[]): number {
        let i: number = 0;
        let record: number[] = [];
        let totalSum: number = 0;

        for (i; i < operations.length; i++) {
            //moglo bi bit glupih errora ovdje u vz types
            if (this.ifNumber(operations[i])) {
                record.push(Number(operations[i]));
                console.log("triggered the reg number clause on ", i, "th element");
            }
            if (
                operations[i] === "+" &&
                record[i - 1] !== undefined &&
                record[i - 2] !== undefined
            ) {
                record.push(record[i - 1] + record[i - 2]);
                console.log("triggered the + clause on ", i, "th element");
                console.log("i -1 is ", record[i - 1], " and i-2 is: ", record[i - 2]);
            }
            if (operations[i] === "D" && record[i - 1] !== undefined) {
                record.push(record[i - 1] * 2);
                console.log("triggered the D clause on ", i, "th element");
                console.log("result is: ", record[i]);
            }
            if (operations[i] === "C" && record[i - 1] !== undefined) {
                record.pop();
                console.log("triggered the D clause on ", i, "th element");
                console.log("record i -1 is: ", record[i - 1]);
            }
        }
        for (i = 0; i < record.length; i++) {
            if (this.ifNumber(record[i])) {
                totalSum = totalSum + record[i];
            }
            console.log(record[i]);
        }
        return totalSum;
    }
}
