function findMissingAndRepeatedValues(grid: number[][]): number[] {
    let a: number = -1, b: number = 1;    
    const vis: boolean[] = Array(2501).fill(false);
    for (const lst of grid) {
        for (const item of lst) {
            if (vis[item]) {
                a = item;
                continue;
            }
            vis[item] = true;
        }
    }
    for (let i = 1; i <= 2500; i++) {
        if (!vis[i]) {
            b = i;
            break;
        }
    }
    return [a, b];
};