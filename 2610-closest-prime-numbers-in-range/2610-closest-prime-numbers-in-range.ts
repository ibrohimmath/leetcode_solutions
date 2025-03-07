function closestPrimes(left: number, right: number): number[] {
    const N: number = 1e6 + 1;
    const isPrime: boolean[] = Array(N).fill(true);
    isPrime[0] = isPrime[1] = false;
    for (let i = 2; i * i < N; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < N; j += i) {
                isPrime[j] = false;
            }
        }
    }
    let minA: number = -1, minB: number = -1; 
    for (let i = left, prev = -1; i <= right; i++) {
        if (!isPrime[i]) continue;
        if (prev !== -1 && (minA === -1 && minB === -1 || i - prev < minB - minA)) {
           minB = i; 
           minA = prev;
        }
        prev = i;
    }
    return [minA, minB];
};