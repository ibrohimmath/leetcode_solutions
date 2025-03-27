function minimumIndex(nums: number[]): number {
    const n: number = nums.length;
    const mp = new Map<number, number>();
    for (const item of nums) {
        mp.set(item, (mp.get(item) ?? 0) + 1);
    }

    const tempMp = new Map<number, number>();
    for (const [i, item] of nums.entries()) {
        const currTimes: number = (tempMp.get(item) ?? 0) + 1;
        const times: number = mp.get(item) ?? 0; 
        if (currTimes * 2 > i + 1 && (times - currTimes) * 2 > n - i - 1) {
            return i;
        }
        tempMp.set(item, currTimes);
    }
    return -1;
};