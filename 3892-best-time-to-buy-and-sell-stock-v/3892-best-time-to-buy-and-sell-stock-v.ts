function maximumProfit(prices: number[], k: number): number {
    function sol(i: number, cnt: number, state: number) {
        if (i >= n || cnt <= 0) {
            if (state != 0) {
                return -Infinity; 
            }
            return 0;
        }
        if (dp[i][cnt][state]) {
            return dp[i][cnt][state];
        }
        let mx: number = sol(i + 1, cnt, state);
        if (state == 0) {
            mx = Math.max(mx, -prices[i] + sol(i + 1, cnt, 1));
            mx = Math.max(mx, prices[i] + sol(i + 1, cnt, 2));
        } else if (state == 1) {
            mx = Math.max(mx, prices[i] + sol(i + 1, cnt - 1, 0));
        } else {
            mx = Math.max(mx, -prices[i] + sol(i + 1, cnt - 1, 0));
        }
        // console.log(i, cnt, state, mx);
        return dp[i][cnt][state] = mx;
    }

    const n: number = prices.length;
    const dp: number[][][] = Array.from({length: n}, () => 
        Array.from({length: k + 1}, () => Array(3).fill(0))
    );
     
    return sol(0, k, 0);
};