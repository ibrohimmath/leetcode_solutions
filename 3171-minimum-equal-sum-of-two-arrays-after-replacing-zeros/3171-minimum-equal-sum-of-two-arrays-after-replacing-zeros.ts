function minSum(nums1: number[], nums2: number[]): number {
    const [zeros1, sum1]: [number, number] = nums1.reduce((acc, item) => [acc[0] + Number(item == 0), acc[1] + item], [0, 0]);
    const [zeros2, sum2]: [number, number] = nums2.reduce((acc, item) => [acc[0] + Number(item == 0), acc[1] + item], [0, 0]);
    if (zeros1 == 0 && zeros1 + sum1 < sum2 + zeros2) {
        return -1;
    } else if (zeros2 == 0 && zeros2 + sum2 < sum1 + zeros1) {
        return -1;
    }
    return Math.max(sum1 + zeros1, sum2 + zeros2);
};