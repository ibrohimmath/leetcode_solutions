function distributeCandies(n: number, limit: number): number {
    if (3 * limit < n) return 0; 
    let counter: number = 0;
    for (let i = 0; i <= Math.min(n, limit); i++) {
        if (n - i > 2 * limit) continue;
        if (n - i >= limit) counter += limit - (n - i - limit) + 1;
        else counter += n - i + 1;
        // console.log(i, limit - (n - i - limit) + 1);
    }
    return counter;
};