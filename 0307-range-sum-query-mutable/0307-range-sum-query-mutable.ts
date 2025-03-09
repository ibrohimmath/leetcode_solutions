class NumArray {
    n: number;
    blockSize: number;

    nums: number[];
    block: number[]

    constructor(nums: number[]) {
        this.n = nums.length; 
        this.blockSize = Math.floor(Math.sqrt(this.n)) + 1;

        this.nums = nums; 
        this.block = Array(this.blockSize).fill(0);

        for (let i = 0; i < this.n; i++) {
            this.block[Math.floor(i / this.blockSize)] += nums[i];
        }
    }

    update(index: number, val: number): void {
       this.block[Math.floor(index / this.blockSize)] -= this.nums[index] - val;
       this.nums[index] = val;
    }

    sumRange(left: number, right: number): number {
        let sm: number = 0; 
        for (let i = left; i <= right; ) {
            if (i % this.blockSize === 0 && i + this.blockSize - 1 <= right) {
                sm += this.block[i / this.blockSize];
                i += this.blockSize;
            } else {
                sm += this.nums[i];
                i++;
            }
        }
        return sm;
    }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */