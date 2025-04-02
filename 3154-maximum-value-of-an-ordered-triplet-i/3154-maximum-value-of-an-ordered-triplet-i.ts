function maximumTripletValue(nums: number[]): number {
    const n: number = nums.length; 

    const prefMax = Array<number>(n).fill(0);
    nums.forEach((item, i) => {
        prefMax[i] = item;
        if (i > 0) {
            prefMax[i] = Math.max(prefMax[i], prefMax[i - 1]);
        } 
    });

    let suffMax: number = nums.at(-1), tripleMax: number = 0;
    for (let i = n - 2; i >= 1; i--) {
        tripleMax = Math.max(tripleMax, (prefMax[i - 1] - nums[i]) * suffMax);     
        suffMax = Math.max(suffMax, nums[i]);
    }

    return tripleMax;
};