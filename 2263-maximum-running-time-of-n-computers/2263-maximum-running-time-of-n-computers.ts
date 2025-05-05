function maxRunTime(n: number, batteries: number[]): number {
    batteries.sort((x, y) => x - y);
    let sm: number = batteries.reduce((acc, item) => acc + item, 0);
    while (batteries.at(-1) > Math.floor(sm / n)) {
        sm -= batteries.at(-1);
        batteries.pop();
        n--; 
    }
    return Math.floor(sm / n);
};