type Triple = [number, number, number];
const cmp = (a: Triple, b: Triple) => {
    return a[0] - b[0];
};

function swimInWater(grid: number[][]): number {
    const m: number = grid.length;
    const n: number = grid[0].length;

    const dirs: [number, number][] = [[0, -1], [1, 0], [0, 1], [-1, 0]];
    const pq = new PriorityQueue<Triple>(cmp);
    const dp: number[][] = Array.from({length: m}, () => Array(n).fill(1e9)); 
    dp[0][0] = grid[0][0];
    pq.enqueue([grid[0][0], 0, 0]);
    
    while (!pq.isEmpty()) {
        const [val, x, y] = pq.dequeue();

        if (x == m - 1 && y == n - 1) {
            break;
        }
        
        for (const [dx, dy] of dirs) {
            const xx: number = x + dx, yy: number = y + dy;

            if (xx < 0 || xx >= m || yy < 0 || yy >= n) continue;
            if (dp[xx][yy] > Math.max(grid[xx][yy], dp[x][y])) {
                dp[xx][yy] = Math.max(grid[xx][yy], dp[x][y]);
                pq.enqueue([dp[xx][yy], xx, yy]);
            } 
        }
    }

    return dp[m - 1][n - 1];
};