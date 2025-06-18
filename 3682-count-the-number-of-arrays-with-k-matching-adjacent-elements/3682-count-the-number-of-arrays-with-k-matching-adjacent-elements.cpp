using ll = long long;
#define each(i, a) for (auto &i : a)

class Solution {
public:
    int countGoodArrays(int n, int m, int k) {
        const int MOD = 1e9 + 7;
        const int N = 1e5 + 1;

        vector<int> fib(N, 1);
        for (int i = 2; i < N; i++) {
            fib[i] = (int)((1LL * i * fib[i - 1]) % MOD);
        }

        auto binpow = [&](ll a, int n, int mod = MOD) -> int {
            if (n == 0) {
                return 1;
            }
            if (a == 0) {
                return 0;
            }

            ll ans = 1;
            while (n > 0) {
                if (n & 1) {
                    ans = ans * a % mod;
                }
                a = a * a % mod;
                n >>= 1;
            }

            return (int)ans;
        };

        auto reverse = [&](int a) -> int {
            return binpow(1LL * a, MOD - 2);
        };

        auto nCk = [&](int n, int k) -> int {
            return (int)((1LL * fib[n] * reverse(fib[k])) % MOD * reverse(fib[n - k]) % MOD);
        };

        return (int)(1LL * m * nCk(n - 1, k) % MOD * binpow(m - 1LL, n - 1 - k) % MOD);
    }
};