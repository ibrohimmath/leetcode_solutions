function minMoves2(nums: number[]): number {
    nums.sort((x, y) => x - y);
    const n: number = nums.length;
    const mid: number = nums.at((n - 1) >> 1);
    let times: number = 0; 
    for (const item of nums) {
        times += Math.abs(item - mid); 
    }
    return times;
};