function maxDistance(str: string, k: number): number {
    function mapOrder(x: string) {
        switch (x) {
            case 'N':
                return 0;
            case 'S':
                return 1;
            case 'E':
                return 2; 
            case 'W':
                return 3; 
        }
    }

    const a: number[] = Array(4).fill(0);
    let mx: number = 0;
    for (let i = 0; i < str.length; i++) {
        const code: number = mapOrder(str[i]);
        a[code]++;

        let K: number = k;
        let n: number = a[0], s: number = a[1], e: number = a[2], w: number = a[3];
        if (n > s) {
            const mn: number = Math.min(s, K); 
            n += mn;
            s -= mn;
            K -= mn;
        } else if (s >= n) {
            const mn: number = Math.min(n, K);
            s += mn;
            n -= mn;
            K -= mn;
        }

        if (e > w) {
            const mn: number = Math.min(w, K);
            e += mn;
            w -= mn;
            K -= mn;
        } else {
            const mn: number = Math.min(e, K);
            w += mn;
            e -= mn;
            K -= mn;
        }

        mx = Math.max(mx, Math.abs(n - s) + Math.abs(w - e));
    }

    return mx;
};