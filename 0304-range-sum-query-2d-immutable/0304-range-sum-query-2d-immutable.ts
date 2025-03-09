class NumMatrix {
    m: number;
    n: number;
    pref: number[][];

    constructor(matrix: number[][]) {
        this.m = matrix.length;
        this.n = matrix[0].length;

        this.pref = Array.from({length: this.m + 1}, () => Array(this.n + 1).fill(0));

        for (let i = 0; i < this.m; i++) {
            for (let j = 0; j < this.n; j++) {
                this.pref[i + 1][j + 1] += 
                this.pref[i + 1][j] + this.pref[i][j + 1] - this.pref[i][j] + matrix[i][j]; 
            }
        }

        console.log(this.pref);
    }

    sumRegion(row1: number, col1: number, row2: number, col2: number): number {
        return this.pref[row2 + 1][col2 + 1] + this.pref[row1][col1] - this.pref[row2 + 1][col1] - this.pref[row1][col2 + 1];
    }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */