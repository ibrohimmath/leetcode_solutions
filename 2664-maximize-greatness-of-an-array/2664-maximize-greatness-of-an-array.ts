function maximizeGreatness(nums: number[]): number {
    nums.sort((x, y) => x - y);    
    let ans: number = 0;
    for (let i = 0, l = 0; i < nums.length; i++) {
        while (l < nums.length && nums[l] <= nums[i]) l++;
        if (l < nums.length && nums[l] > nums[i]) {
            ans++;
            l++;
        }
    }
    return ans; 
};