function longestSubarray(nums: number[]): number {
    let mx: number = 0;

    let prevOnes: number = 0, currOnes: number = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            currOnes++;
            mx = Math.max(mx, currOnes + prevOnes);
        } else {
            if (currOnes > 0) {
                prevOnes = currOnes;
                currOnes = 0;
            } else {
                prevOnes = 0;
            }
        }
    }

    return Math.min(mx, nums.length - 1);
};