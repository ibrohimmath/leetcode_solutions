function maxPower(stations: number[], r: number, k: number): number {
    const N: number = stations.length;
 
    function can(x: number): boolean {
        const a: number[] = stations.slice();
        let cost: number = 0;

        let station: number = 0;
        for (let i = 0; i < r; i++) {
            station += a[i];
        }

        for (let i = 0; i < N; i++) {
            if (i - r - 1 >= 0) {
                station -= a[i - r - 1];
            }
            if (i + r < N) {
                station += a[i + r];
            }
            if (station >= x) continue;

            const diff: number = x - station;
            cost += diff;
            station += diff;
            a[Math.min(N - 1, i + r)] += diff;

            if (cost > k) return false;
        }  

        return true;
    }

    let L: number = 0, R: number = 1e18, M: number;
    while (L < R) {
        M = Math.floor((L + R + 1) / 2);

        if (can(M)) {
            L = M;
        } else {
            R = M - 1;
        }
    }

    return L;
};