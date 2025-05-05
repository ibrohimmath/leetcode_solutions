function numTilings(n: number): number {
    const MOD: number = 1e9 + 7;
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = (2 * dp[i - 1] + (i >= 3 ? dp[i - 3] : 0)) % MOD; 
    }
    return dp[n];
};