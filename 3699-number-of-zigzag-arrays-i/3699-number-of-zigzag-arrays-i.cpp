using ll = long long;

constexpr static inline int MOD = 1e9 + 7;
constexpr static inline int N = 2010;

static inline ll dp[N][2];
static inline ll pref[N][2];

// 0 -> decreasing
// 1 -> increasing
class Solution {  
public:
    int zigZagArrays(int n, int l, int r) {
        fill(&dp[0][0], &dp[0][0] + N * 2, 0LL);
        fill(&pref[0][0], &pref[0][0] + N * 2, 0LL);
        
        for (int i = 1; i < n; ++i) {
            if (i == 1) {
                for (int curr = l; curr <= r; ++curr) {
                    dp[curr][0] = r - curr;
                    dp[curr][1] = curr - l;
                }
            }
    
            else {
                for (int curr = l; curr <= r; ++curr) {
                    // dp(curr, 0)
                    dp[curr][0] = ((pref[r][1] - pref[curr][1]) % MOD + MOD) % MOD;
                                    
                    // dp(curr, 1)
                    dp[curr][1] = (pref[curr - 1][0]) % MOD;
                }
            }
            


            for (int curr = 1; curr <= r; ++curr) {
                for (int c = 0; c < 2; ++c) {
                    pref[curr][c] = dp[curr][c] + pref[curr - 1][c];
                }
            }
        }
        
        ll sm = 0LL;
        for (int c = 0; c < 2; c++) sm = (sm + pref[r][c]) % MOD;
        
        return sm;
    }
};

auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    
    return;
};