class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */

    // 1) ako je obicni broj, dodaj ga u RECORD (Da li ovo znaci array il nest drugo?)
    // 2) ako je C, brisi zadnji entry
    // n) final calculation: if (operations[i] !== "C" && operations[i] !== "D" && operations[i] !== "+") {
    // If it's none of those, it must be a number!}
    
    //ova prica odozgo je prije nego sto sam skonto da je jebeni stack
    // task u pitanju..

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
            }
            if (
                operations[i] === "+" &&
                record[i - 1] !== undefined &&
                record[i - 2] !== undefined
            ) {
                record.push(record[i - 1] + record[i - 2]);
            }
            if (operations[i] === "D" && record.at(-1) !== undefined) {
                // ovo je ko peek(), samo custom
                record.push(record.at(-1) * 2);
            }
            if (operations[i] === "C" && record[i - 1] !== undefined) {
                record.pop();
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
