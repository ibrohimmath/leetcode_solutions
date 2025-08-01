function generate(numRows: number): number[][] {
    if (numRows == 1) return [[1]];
    if (numRows == 2) return [[1], [1, 1]];

    const ans: number[][] = [[1], [1, 1]];
    let prevRow: number[] = [1, 1];

    for (let i = 3; i <= numRows; i++) {
        const row: number[] = [1];
        for (let i = 1; i < prevRow.length; i++) {
            row.push(prevRow[i - 1] + prevRow[i]);
        }
        row.push(1);
        prevRow = [...row];
        ans.push(row);
    }

    return ans;
};