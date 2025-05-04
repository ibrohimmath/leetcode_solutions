function maxRunTime(n: number, batteries: number[]): number {
    let l = 0, r = batteries.reduce((acc, item) => acc + item, 0), m: number;
    while (l < r) {
        m = Math.floor((l + r + 1) / 2);
        
        let sm: number = 0;
        for (const item of batteries) {
            sm += Math.min(item, m); 
        }

        if (sm >= n * m) {
            l = m;
        } else {
            r = m - 1; 
        }
    }
    return l;
};