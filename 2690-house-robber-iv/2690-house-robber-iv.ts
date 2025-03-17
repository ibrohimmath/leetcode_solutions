function minCapability(nums: number[], k: number): number {
    let l: number = 1, r: number = 1e10, mid: number;
    while (l < r) {
        mid = Math.floor((l + r) / 2); 

        let last: number = -1, counter = 0;
        for (let i = 0; i < nums.length; i++) {
            if ((last === -1 || i > last + 1) && nums[i] <= mid) {
                counter++;
                last = i;
            }
        }

        if (counter >= k) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }

    return r;
};