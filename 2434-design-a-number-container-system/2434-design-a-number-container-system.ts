const cmp = (x: number, y: number) => {
    return x - y;
};

class NumberContainers {
    indexToNum: Map<number, number>;
    mp: Map<number, PriorityQueue<number>>;

    constructor() {
        this.indexToNum = new Map();
        this.mp = new Map();
    }

    change(index: number, number: number): void {
        if (this.indexToNum.has(index)) {
            const num: number = this.indexToNum.get(index);

            if (this.mp.has(num)) {
                const pq = this.mp.get(num);
                if (pq.front() == index) {
                    pq.dequeue();
                }
                if (pq.isEmpty()) {
                    this.mp.delete(num);
                }
            }
        }
        this.indexToNum.set(index, number);
        if (!this.mp.has(number)) {
            this.mp.set(number, new PriorityQueue<number>(cmp));
        }
        this.mp.get(number).enqueue(index);
    }

    find(num: number): number {
        if (!this.mp.has(num) || this.mp.get(num).isEmpty()) return -1;
        const pq = this.mp.get(num);
        while (!pq.isEmpty() && (!this.indexToNum.has(pq.front()) || this.indexToNum.get(pq.front()) != num)) {
            pq.dequeue();
        }
        if (pq.isEmpty()) {
            this.mp.delete(num);
            return -1;
        }
        return pq.front();
        // return this.mp.get(number).dequeue();
    }
}

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */