function countHillValley(nums: number[]): number {
    const n: number = nums.length;

    const suffNonEqual: number[] = Array(n).fill(-1);
    // suffNonEqual[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suffNonEqual[i] = (nums[i] != nums[i + 1] ? nums[i + 1] : suffNonEqual[i + 1]);
    }
    
    let counter: number = 0, prefNonEqual: number = -1;
    for (let i = 1; i < n - 1; i++) {
        if (nums[i] != nums[i - 1]) {
            prefNonEqual = nums[i - 1];
        } else {
            continue;
        }
        
        if (prefNonEqual == -1 || suffNonEqual[i] == -1) continue;
        if (nums[i] < Math.min(prefNonEqual, suffNonEqual[i]) || nums[i] > Math.max(prefNonEqual, suffNonEqual[i])) {
            counter++;
        }
        console.log(nums[i], prefNonEqual, suffNonEqual[i], Math.min(prefNonEqual, suffNonEqual[i]), Math.max(prefNonEqual, suffNonEqual[i]), counter);
    }

    return counter;
};