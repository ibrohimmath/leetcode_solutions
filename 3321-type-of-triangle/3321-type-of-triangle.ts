function triangleType(nums: number[]): string {
    const sm: number = nums[0] + nums[1] + nums[2]; 
    for (const num of nums) {
        if (sm - num <= num) {
            return "none";
        }
    }
    if (nums[0] == nums[1] && nums[0] == nums[2]) {
        return "equilateral";
    } else if (nums[0] == nums[1] || nums[0] == nums[2] || nums[1] == nums[2]) {
        return "isosceles";
    }
    return "scalene";
};