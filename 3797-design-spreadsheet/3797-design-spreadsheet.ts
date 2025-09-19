const getCode = (x: string) => {
    return x.charCodeAt(0) - 'A'.charCodeAt(0);
};

class Spreadsheet {
    mat: number[][];

    constructor(rows: number) {
        this.mat = Array.from({length: rows}, () => Array(26).fill(0));
    }

    parseExcelCell(cell: string) {
        if (Number.isNaN(+cell[0])) {
            const row: number = parseInt(cell.slice(1)) - 1;
            const col: number = getCode(cell[0]);
            return [row, col];
        }
        return [+cell];
    };

    setCell(cell: string, value: number): void {
        const [r, c] = this.parseExcelCell(cell);
        this.mat[r][c] = value; 
    }

    resetCell(cell: string): void {
        this.setCell(cell, 0);    
    }

    getValue(formula: string): number {
        const [a, b] = formula.slice(1).split('+');
        return this.getCellValue(a) + this.getCellValue(b);
    }

    getCellValue(cell: string): number {
        const lst = this.parseExcelCell(cell);
        if (lst.length == 1) return lst[0];
        return this.mat[lst[0]][lst[1]];
    }
}

/**
 * Your Spreadsheet object will be instantiated and called as such:
 * var obj = new Spreadsheet(rows)
 * obj.setCell(cell,value)
 * obj.resetCell(cell)
 * var param_3 = obj.getValue(formula)
 */