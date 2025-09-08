function getBiggestThree(grid: number[][]): number[] {
    const m: number = grid.length, n: number = grid[0].length;
    const dirs: [number, number][] = [[-1, 1], [1, 1], [1, -1], [-1, -1]];
    const dp: number[][][][] = Array.from({length: m}, () => 
        Array.from({length: n}, () => 
            Array.from({length: 4}, () => 
                Array(50).fill(1e18)))
    );

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            for (let d = 0; d < 4; d++) {
                dp[i][j][d][1] = grid[i][j];
            }
        }
    }

    function calc(i: number, j: number, d: number, sz: number) {
        if (i < 0 || i >= m || j < 0 || j >= n) return 0;
        if (sz == 1) return grid[i][j];
        if (dp[i][j][d][sz] !== 1e18) {
            return dp[i][j][d][sz];
        }
        const new_i: number = i + dirs[d][0];
        const new_j: number = j + dirs[d][1];
        return dp[i][j][d][sz] = calc(new_i, new_j, d, sz - 1) + grid[i][j];
    }

    // calculation 4 side slope prefixes, where dp[i][j][slope][sz]
    // slope with slope coefficient and sz size, start of slope is (i, j) point
    for (let sz = 2; sz < 50; sz++) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                for (let d = 0; d < 4; d++) {
                    calc(i, j, d, sz);
                    // const next_i = i + dirs[d][0], next_j = j + dirs[d][1];
                    // if (next_i < 0 || next_i >= m || next_j < 0 || next_j >= n) continue; 
                    // dp[i][j][d][sz] += dp[next_i][next_j][d][sz - 1] + grid[i][j];
                }
            }
        }
    }
    
    let lst: number[] = [];
    for (let sz = 2; sz < 50; sz++) {
        for (let i = 0; i < m; i++) {
            outer: for (let j = 0; j < n; j++) {
                let rombusSum: number = 0;
                let edgesSum: number = 0;

                let mi: number = i, mj: number = j;
                for (let d = 0; d < 4; d++) {
                    // console.log(grid[mi][mj], mi, mj, d, sz, dp[mi][mj][d][sz]);
                    edgesSum += grid[mi][mj];
                    rombusSum += dp[mi][mj][d][sz];

                    const new_i: number = mi + (sz - 1) * dirs[d][0],
                        new_j: number = mj + (sz - 1) * dirs[d][1];
                    if (new_i < 0 || new_i >= m || new_j < 0 || new_j >= n) {
                        // console.log("crash");
                        continue outer; 
                    }
                    mi = new_i;
                    mj = new_j; 
                }

                rombusSum -= edgesSum;
                // console.log(rombusSum);
                lst.push(rombusSum);
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            lst.push(grid[i][j]);
        }
    }

    lst = [...new Set(lst)].sort((x, y) => y - x);
    return lst.slice(0, Math.min(3, lst.length));
};