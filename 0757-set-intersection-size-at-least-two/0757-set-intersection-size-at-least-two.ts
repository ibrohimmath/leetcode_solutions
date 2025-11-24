function intersectionSizeTwo(intervals: number[][]): number {
    intervals.sort((x, y) => x[1] != y[1] ? x[1] - y[1] : y[0] - x[0]);
    console.log(intervals);
    let setSize: number = 0;
    let a: number = -Infinity, b: number = -Infinity;
    for (const [l, r] of intervals) {
        if (l <= a) {
            continue;
        }
        if (b < l) {
            a = r - 1;
            b = r;
            setSize += 2;
        } else {
            a = b;
            b = r;
            setSize++;
        }
        console.log(a, b); 
    }
    return setSize;
};