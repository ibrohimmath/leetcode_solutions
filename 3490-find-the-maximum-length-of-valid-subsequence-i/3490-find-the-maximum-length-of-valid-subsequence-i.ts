function maximumLength(nums: number[]): number {
    const n: number = nums.length;

    let lastOddCount: number = 0, lastEvenCount: number = 0, oddCount: number = 0;
    for (const item of nums) {
        if (item & 1) {
            lastOddCount = lastEvenCount + 1;
            oddCount++;
        } else {
            lastEvenCount = lastOddCount + 1;
        }
    }

    return Math.max(lastEvenCount, lastOddCount, n - oddCount, oddCount);
};