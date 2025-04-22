function beautifulSubarrays(nums: number[]): number {
    const n = nums.length; 
    let pref: number = 0;
    const oddBitCounter = new Map<number, number>();
    oddBitCounter.set(0, 1);
    let ans: number = 0;
    for (const item of nums) {
        pref ^= item;
        const value: number = oddBitCounter.get(pref) ?? 0;
        ans += value; 
        oddBitCounter.set(pref, value + 1);
    } 
    return ans;
};