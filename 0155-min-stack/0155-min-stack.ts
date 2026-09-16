class MinStack {
    _min = Infinity;

    stack: { val: number, min: number }[];

    constructor() {
        this.stack = [];
    }

    push(value: number): void {
        this._min = Math.min(this._min, value);
        this.stack.push({ val: value, min: this._min });
    }

    pop(): void {
        if (this.isEmpty()) {
            return;
        }
        this.stack.pop();
        if(this.isEmpty()) this._min = Infinity;
        else this._min = this.getMin();
    }

    top(): number {
        if (this.isEmpty()) return;
        return this.stack[this.stack.length - 1].val;
    }

    getMin(): number {
        if (this.isEmpty()) return;
        return this.stack[this.stack.length - 1].min;
    }

    isEmpty(): boolean {
        return this.stack.length === 0;
    }
}


/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(value)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */