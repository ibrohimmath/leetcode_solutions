function maximumTripletValue(nums: number[]): number {
    const n: number = nums.length;
    let ans: number = -1e18, mx: number = nums[0], subtMax: number = 0;   
    for (let i = 1; i < n - 1; i++) {
       subtMax = Math.max(subtMax, mx - nums[i]); 
       mx = Math.max(mx, nums[i]);
       ans = Math.max(ans, subtMax * nums[i + 1]);
    }
    return ans;
};