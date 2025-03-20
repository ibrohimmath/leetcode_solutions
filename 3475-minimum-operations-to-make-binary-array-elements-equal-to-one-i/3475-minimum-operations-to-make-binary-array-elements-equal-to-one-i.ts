function minOperations(nums: number[]): number {
    const n: number = nums.length; 
    const k: number = 3;
    let flipped: boolean[] = Array(n).fill(false);

    let flipSm: number = 0, counter: number = 0;
    for (let i = 0; i < n; i++) {
        if (i - k >= 0) {
            flipSm -= +flipped[i - k];
        }
        if (flipSm & 1) {
            nums[i] = 1 - nums[i];
        }
        if (i <= n - k && !nums[i]) {
            nums[i] = 1 - nums[i];
            flipped[i] = true;
            flipSm++;
            counter++;
        }
        if (nums[i] === 0) {
            return -1;
        }
    }

    return counter;     
};