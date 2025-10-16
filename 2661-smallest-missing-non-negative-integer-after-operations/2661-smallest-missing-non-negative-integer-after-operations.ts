function findSmallestInteger(nums: number[], value: number): number {
    const counter: number[] = Array(value).fill(0);
    for (const item of nums) {
        let remain = 0;
        if (item < 0) {
            remain = (value - (Math.abs(item) % value)) % value;
        } else if (item > 0) {
            remain = item % value;
        }
        counter[remain]++;
    }
    for (let i = 0; i < nums.length; i++) {
        const remain = i % value;
        if (counter[remain] == 0) return i;  
        counter[remain]--;
    }
    return nums.length;
};