function checkValidCuts(n: number, rectangles: number[][]): boolean {
    function isValid(lst: [number, number][]) {
        let counterX: number = 0; 
        for (let i = 0, right = 0; i < lst.length; i++) {
            let left: number = lst[i][0]; 
            right = Math.max(right, lst[i][1]); 
            let j: number = i; 
            while (j < lst.length && Math.max(left, lst[j][0]) < Math.min(right, lst[j][1])) {
                right = Math.max(right, lst[j][1]);
                j++;
            }
            if (j < lst.length && right <= lst[j][0]) {
                counterX++;
            }
            if (j > i) {
                i = j - 1;
            }
        }
        return counterX >= 2;
    }
    const x: [number, number][] = rectangles.map(sq => [sq[0], sq[2]]), y: [number, number][] = rectangles.map(sq => [sq[1], sq[3]]);    
    x.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
    y.sort((a, b) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
    return isValid(x) || isValid(y); 
};