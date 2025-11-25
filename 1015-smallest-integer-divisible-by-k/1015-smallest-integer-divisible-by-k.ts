function smallestRepunitDivByK(k: number): number {
    if (k % 2 == 0) return -1;
    for (let l = 1, r = 0; l <= 100000; l++) {
        r = (r * 10 + 1) % k;
        if (r == 0) {
            return l;
        }
    }
    return -1;
};