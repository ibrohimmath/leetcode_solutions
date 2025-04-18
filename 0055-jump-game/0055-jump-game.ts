function canJump(nums: number[]): boolean {
    const n: number = nums.length;
    let r: number = 0;
    for (let i = 0; i < n; i++) {
        if (i > r) {
            return false; 
        }
        r = Math.max(r, i + nums[i]);
    }
    return true;
};