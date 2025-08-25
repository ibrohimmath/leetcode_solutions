function findDiagonalOrder(mat: number[][]): number[] {
    const m: number = mat.length, n: number = mat[0].length;
    const ans: number[] = [];
    const D: number = Math.min(m - 1, n - 1);
    for (let d: number = 0; d <= m + n - 2; d++) {
        if (d & 1) {
            let j: number = Math.min(d, n - 1), i: number = d - j;
            while (i < m && j >= 0) {
                ans.push(mat[i][j]);
                // console.log(mat[i][j], "down", d);
                j--;
                i++;
            }
        } else {
            let i: number = Math.min(d, m - 1), j: number = d - i;
            while (i >= 0 && j < n) {
                ans.push(mat[i][j]);
                // console.log(mat[i][j], "up", d);
                i--;
                j++;
            }
        }
    }
    return ans;
};