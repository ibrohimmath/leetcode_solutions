function smallestNumber(n: number): number {
    if (!(n & (n + 1))) {
        return n;
    }
    return (1 << (n.toString(2).length)) - 1;
};