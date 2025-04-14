function countGoodTriplets(arr: number[], a: number, b: number, c: number): number {
    const n: number = arr.length;
    const count: number[] = Array(1001).fill(0);
    let ans: number = 0;
    for (let j = 0; j < n; j++) {
        for (let k = j + 1; k < n; k++) {
            if (Math.abs(arr[j] - arr[k]) > b) continue;
            const low1: number = arr[j] - a, up1: number = arr[j] + a;
            const low2: number = arr[k] - c, up2: number = arr[k] + c;
            const L: number = Math.max(0, Math.max(low1, low2));
            const R: number = Math.min(1000, Math.min(up1, up2));
            if (L <= R) {
                ans += count[R];
                if (L > 0) ans -= count[L - 1];
            }
        }
        for (let x: number = arr[j]; x <= 1000; x++) {
            ++count[x];
        }
    } 
    return ans;
};