function soupServings(n: number): number {
    function mpGet(x: number, y: number) {
        if (!dp.has(x) || !dp.get(x).has(y)) return 0;
        return dp.get(x).get(y);
    }
    function mpSet(x: number, y: number, val: number) {
        const map: Map<number, number> = dp.get(x) ?? new Map();
        map.set(y, val);
        dp.set(x, map);
    }

    const m: number = Math.ceil(n / 25);
    if (m >= 200) {
        return 1;
    }
    const dp: Map<number, Map<number, number>> = new Map();
    mpSet(0, 0, 1 / 2); 

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= m; j++) {
            if (i == 0 && j == 0) continue;
            if (i == 0) {
                mpSet(i, j, 1);
                continue;
            }
            if (j == 0) {
                mpSet(i, j, 0);
                continue;
            }
            const val: number = (
                mpGet(Math.max(0, i - 4), j) 
                + mpGet(Math.max(0, i - 3), Math.max(0, j - 1))
                + mpGet(Math.max(0, i - 2), Math.max(0, j - 2)) 
                + mpGet(Math.max(0, i - 1), Math.max(0, j - 3))
            ) / 4;
            mpSet(i, j, val); 
        }
        if (mpGet(i, i) >= 1 - (1e-5)) {
            return 1;
        }
    }

    return mpGet(m, m);
};