function differenceOfSums(n: number, m: number): number {
    function sum(n: number) {
        return n * (n + 1) / 2;
    }   

    const l: number = Math.floor(n / m);
    return sum(n) - 2 * sum(l) * m;
};