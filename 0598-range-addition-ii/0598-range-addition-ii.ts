function maxCount(m: number, n: number, ops: number[][]): number {
    let r: number = 1e9, c: number = 1e9;

    for (const tuple of ops) {
        r = Math.min(r, tuple[0]);
        c = Math.min(c, tuple[1]);
    }

    return r === 1e9 && c === 1e9 ? m * n : r * c;
};