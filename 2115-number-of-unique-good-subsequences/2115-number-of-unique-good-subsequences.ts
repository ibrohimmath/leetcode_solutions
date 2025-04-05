function numberOfUniqueGoodSubsequences(binary: string): number {
    const MOD: number = 1e9 + 7;
    let isZero: boolean = false, left: number = -1;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] == '0') {
            isZero = true;
        } else if (left == -1) {
            left = i;
        }
    }
    binary = binary.slice(left);
    const n: number = binary.length;
    const dp = Array<number>(n + 1).fill(0);

    let lastOne: number = -1, lastZero: number = -1;
    if (binary[0] == '1') dp[1] = 1;
    for (let i = 1, j = 2; i < n; i++, j++) {
        dp[j] = 2 * dp[j - 1] % MOD; 
        if (lastOne != -1 && binary[i] == '1') {
            dp[j] = (dp[j] - dp[lastOne - 1] + MOD) % MOD;
        }
        if (lastZero != -1 && binary[i] == '0') {
            dp[j] = (dp[j] - dp[lastZero - 1] + MOD) % MOD;
        }
        if (binary[i] == '1') {
            lastOne = j;
        } else {
            lastZero = j;
        }
    }

    console.log(dp);
    return dp.at(-1) + (+isZero);
};