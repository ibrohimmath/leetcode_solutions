function countOdds(low: number, high: number): number {
    function countOdd(n: number) {
        return Math.floor((n + 1) / 2);
    }
    return countOdd(high) - countOdd(low - 1);
};