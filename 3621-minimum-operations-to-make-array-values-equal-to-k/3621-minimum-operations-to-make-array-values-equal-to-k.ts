function minOperations(nums: number[], k: number): number {
    const counter: number[] = Array(101).fill(0);
    const operations: number[] = Array(101).fill(0);
    for (const item of nums) {
        if (item < k) {
            return -1;
        }
        counter[item]++;
    }
    for (let i = 99; i >= 0; i--) {
        operations[i] += Number(counter[i + 1] > 0) + operations[i + 1];
    }
    return operations[k];
};