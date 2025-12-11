function countCoveredBuildings(n: number, buildings: number[][]): number {
    const N = 100000 + 1;
    const INF = 1e9;

    const rowMn = Array(N).fill(INF), rowMx = Array(N).fill(-INF);
    const colMn = Array(N).fill(INF), colMx = Array(N).fill(-INF);

    for (const [x, y] of buildings) {
        rowMn[x] = Math.min(rowMn[x], y);
        rowMx[x] = Math.max(rowMx[x], y);
        colMn[y] = Math.min(colMn[y], x);
        colMx[y] = Math.max(colMx[y], x);
    }

    let ans = 0;
    for (const [x, y] of buildings) {
        if (y > rowMn[x] && y < rowMx[x] &&
            x > colMn[y] && x < colMx[y]) {
            ans++;
        }
    }

    return ans;
}
