function minOperations(nums1: number[], nums2: number[]): number {
    let ops: number = 1;
    let closest: number = nums1[0];
    for (let i = 0; i < nums1.length; i++) {
        if ((nums2.at(-1) - nums1[i]) * (nums2.at(-1) - nums2[i]) < 0) {
            closest = nums2.at(-1);
        } else {
            for (const item of [nums1[i], nums2[i]]) {
                if (Math.abs(item - nums2.at(-1)) < Math.abs(closest - nums2.at(-1))) {
                    closest = item;
                }
            }
        }
        ops += Math.abs(nums1[i] - nums2[i]);
    }
    ops += Math.abs(closest - nums2.at(-1));
    return ops;
};