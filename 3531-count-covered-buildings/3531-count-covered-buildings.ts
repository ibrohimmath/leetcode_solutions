function countCoveredBuildings(n: number, buildings: number[][]): number {
    const N: number = 1e5 + 1;
    buildings.sort((x, y) => x[0] != y[0] ? x[0] - y[0] : x[1] - y[1]);
    const rowCnt: number[] = Array(N).fill(0), prefRowCnt: number[] = Array(N).fill(0);
    const colCnt: number[] = Array(N).fill(0), prefColCnt: number[] = Array(N).fill(0);
    let ans: number = 0;
    for (const [x, y] of buildings) {
        rowCnt[x]++;
        colCnt[y]++;
    }
    for (const [x, y] of buildings) {
        prefRowCnt[x]++;
        prefColCnt[y]++;
        // console.log(prefRowCnt[x], prefColCnt[y], rowCnt[x], colCnt[y]);
        if (prefRowCnt[x] > 1 && prefRowCnt[x] < rowCnt[x] && 
            prefColCnt[y] > 1 && prefColCnt[y] < colCnt[y]) ans++;
    }
    return ans;
};