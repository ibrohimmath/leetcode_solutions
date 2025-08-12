#define ll long long

class Solution {
public:
    int numberOfWays(int n, int x) {
        const int MOD = 1e9 + 7;
        vector<vector<ll>> dp(n + 1, vector<ll>(n + 1, 0LL));
        dp[0][0] = 1LL;
        ll sm = 0LL;

        for (ll i = 1; i <= n; i++) {
            for (ll j = 1; pow(j, x) <= i; j++) {
                ll diff = pow(j, x);
                for (ll k = 0; k < j; k++) {
                    dp[i][j] = (dp[i][j] + dp[i - diff][k]) % MOD;
                }
                if (i == n) {
                    sm = (sm + dp[i][j]) % MOD;
                }
            }
        }

        return sm;
    }
};