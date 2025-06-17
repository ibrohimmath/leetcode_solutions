/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    const n: number = nums.length;
    let l: number = 0, r: number = n - 1;  
    for (let i = 0; i < n; ) {
        // console.log(nums, i, l, r);
        if (nums[i] == 1 || i < l || i > r) {
           i++; 
           continue;
        }

        if (nums[l] == 0) {
            l++;
        } else if (nums[r] == 2) {
            r--;
        } else if (nums[i] == 0) {
           [nums[i], nums[l]] = [nums[l], nums[i]];
           l++;
        } else if (nums[i] == 2) {
            [nums[i], nums[r]] = [nums[r], nums[i]];
            r--;
        }
    }
};