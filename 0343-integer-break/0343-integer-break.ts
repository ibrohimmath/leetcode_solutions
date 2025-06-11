function integerBreak(n: number): number {
    if (n <= 3) {
        return (n >> 1) * ((n + 1) >> 1);
    }
    const three: number = Math.floor(n / 3);
    if (n % 3 == 0) {
        return Math.pow(3, three);
    } else if (n % 3 == 1) {
        return Math.pow(3, three - 1) * 4;
    } else {
        return Math.pow(3, three) * 2;
    }
};