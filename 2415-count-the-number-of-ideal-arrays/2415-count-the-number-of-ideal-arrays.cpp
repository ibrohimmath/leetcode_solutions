using ll = long long;

class Solution {
public:
    int MOD = 1e9 + 7;

    ll binpow(ll a, int n) {
        if (a == 0) {
            return 0;
        }
        if (n == 0) {
            return 1;
        }
        ll res = 1;
        while (n > 0) {
            if (n & 1) {
                res = res * a % MOD;
            }
            a = a * a % MOD;
            n >>= 1; 
        }
        return res;
    }

    ll inverse(ll a) {
        return binpow(a, MOD - 2);
    }

    int idealArrays(int n, int maxValue) {
        vector<ll> fact(1e5 + 1, 1LL);
        for (int i = 2; i <= 1e5; i++) {
            fact[i] = fact[i - 1] * i % MOD;
        }

        auto C = [&](int n, int k) -> ll {
            return fact[n] * inverse(fact[k]) % MOD * inverse(fact[n - k]) % MOD;
        };

        ll ans = 1;
        for (int i = 2; i <= maxValue; i++) {
            ll combs = 1, k = i; 
            for (int j = 2; j * j <= k; j++) {
                int deg = 0;
                while (k % j == 0) {
                    deg++;
                    k /= j;
                }
                if (deg > 0) {
                    combs = combs * C(deg + n - 1, deg) % MOD;
                }
            }
            if (k > 1) {
                combs = combs * C(1 + n - 1, 1) % MOD; 
            }
            ans = (ans + combs) % MOD;
        }
        return ans;
    }
};