function isPowerOfTwo(n: number): boolean {
    return (n <= 0 ? false : (n & (n - 1)) == 0);
};