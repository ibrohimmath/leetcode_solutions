function threeConsecutiveOdds(arr: number[]): boolean {
    const isOdd = (x) => (x & 1) == 1;
    const n: number = arr.length;
    for (let i = 0; i < n - 2; i++) {
        if (isOdd(arr[i]) && isOdd(arr[i + 1]) && isOdd(arr[i + 2])) {
            return true;
        }
    }
    return false;
};