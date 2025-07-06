#define each(item, a) for (auto &item : a)
#define all(x) (x).begin(), (x).end()

class Solution {
public:
    int possibleStringCount(string word, int k) {
        const int n = word.size();
        const int MOD = 1e9 + 7;

        vector<int> a;
        for (int i = 0; i < n; ) {
            int j = i;
            while (j < n && word[j] == word[i]) {
                j++;
            }
            a.push_back(j - i);
            i = max(i + 1, j);
        }
        
        int total = 1;
        // cout << k << "\n";
        each(item, a) {
        //    cout << item << ' '; 
            total = int(1LL * total * item % MOD); 
        }
        // cout << "\n";

        if (a.size() >= k) {
            return total;
        }

        vector<int> dp(k, 1), new_dp(k);
        // each(item, dp) cout << item << ' '; cout << "\n";

        each(item, a) {
            // each(jtem, new_dp) jtem = 0LL;
            new_dp.assign(k, 0);
            for (int i = 1; i < k; i++) {
                new_dp[i] = dp[i - 1];
                int left = i - item - 1;
                if (left >= 0) {
                    new_dp[i] = int((0LL + dp[i - 1] - dp[left] + MOD) % MOD);
                }
                new_dp[i] = int((0LL + new_dp[i] + new_dp[i - 1]) % MOD);
            }
            dp.assign(all(new_dp));
            // each(item, dp) cout << item << ' '; cout << "\n";
        }

        int bad = dp.back(); 
        // cout << total << ' ' << bad << "\n";
        return int((0LL + total - bad + MOD) % MOD);
    }
};
