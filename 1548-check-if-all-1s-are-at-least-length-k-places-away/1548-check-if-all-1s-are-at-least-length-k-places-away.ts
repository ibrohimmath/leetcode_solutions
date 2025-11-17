function kLengthApart(nums: number[], k: number): boolean {
    const N: number = nums.length;
    let prev: number = -1;
    for (let i = 0; i < N; i++) {
        if (nums[i] == 0) continue;
        if (prev != -1 && i - prev - 1 < k) {
            return false;
        }
        prev = i;
    }
    return true;
};