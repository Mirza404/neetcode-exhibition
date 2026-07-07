class MinStack {
    stack: number[];
    minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else if (this.minStack.at(-1) >= val) {
            this.minStack.push(val);
        } else {
            this.minStack.push(this.minStack.at(-1));
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        if (this.minStack.at(-1) === this.stack.at(-1)) {
            this.minStack.pop();
        }
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.at(-1);
    }
}
