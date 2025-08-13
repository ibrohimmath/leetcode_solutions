function isPowerOfThree(n: number): boolean {
    while (n >= 3 && n % 3 == 0) {
        n /= 3;
    }
    return n == 1;
};