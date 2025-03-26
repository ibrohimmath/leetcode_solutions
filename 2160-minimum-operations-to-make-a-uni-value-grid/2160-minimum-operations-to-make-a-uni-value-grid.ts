function minOperations(grid: number[][], x: number): number {
    const lst: number[] = grid.flat(); 
    lst.sort((x, y) => x - y);
    const mn: number = lst[0];
    for (let i = 0; i < lst.length; i++) {
        if ((lst[i] - mn) % x) {
            return -1;
        }
    } 
    const mid: number = lst[(lst.length - 1) >> 1];
    let times: number = 0;
    for (const item of lst) {
        times += Math.abs(item - mid) / x;
    }
    return times;
};