function getSneakyNumbers(nums: number[]): number[] {
    const n: number = nums.length;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] == i) {
            continue;
        }

        let j: number = i, prev: number = -1;
        while (nums[j] != j) {
            const next: number = nums[j];
            nums[j] = prev;
            j = prev = next;
        }

        if (prev != -1) {
            if (nums[n - 1] == -1) {
                nums[n - 1] = prev;
            } else if (nums[n - 2] == -1) {
                nums[n - 2] = prev;
                return [nums[n - 1], nums[n - 2]];
            }
        }
    }
};