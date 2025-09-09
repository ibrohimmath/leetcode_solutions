class Solution {
public:
    int peopleAwareOfSecret(int n, int delay, int forget) {
        const int MOD = 1e9 + 7;

        vector<long long> pref(n + 1);
        pref[1] = 1LL; 

        for (int i = 2; i <= n; i++) {
            long long count = 0;
            if (i - delay >= 0) {
                count = pref[i - delay];
            }
            if (i - forget >= 0) {
                count = (count - pref[i - forget] + MOD) % MOD;
            }

            pref[i] = ((i > 0 ? pref[i - 1] : 0LL) + count) % MOD;
            // cout << i << ' ' << count << ' ' << pref[i] << "\n";
        }

        return (pref[n] - (n - forget - 1 >= 0 ? pref[n - forget] : 0) + MOD) % MOD;
    }
};