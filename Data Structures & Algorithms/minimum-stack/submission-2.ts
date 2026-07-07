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
        if (this.stack.length !== 0 && this.minStack.length !== 0) {
            if (this.minStack.at(-1) === this.stack.at(-1)) {
                this.minStack.pop();
            }
            this.stack.pop();
        }
        console.error("Your stack is empty!");
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack.length === 0 ? 0 : this.stack.at(-1);
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack.length === 0 ? 0 : this.minStack.at(-1);
    }
}
