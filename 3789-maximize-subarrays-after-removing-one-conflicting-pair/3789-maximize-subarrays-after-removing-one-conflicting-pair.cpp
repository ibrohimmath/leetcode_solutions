using ll = long long;
using ld = long double;
#define all(x) (x).begin(), (x).end()
#define sz(a) (int)((a).size())
#define debug(x) cout << #x << ' ' << x << "\n";
#define each(i, a) for (auto& i : a)

class Solution {
public:
    using tpl2 = pair<int, int>;

    template <typename... Args> void println(Args... args) {
        ((cout << args << ' '), ...) << '\n';
    }

    ll maxSubarrays(int n, vector<vector<int>>& conflictingPairs) {
        each(item, conflictingPairs) {
            if (item[0] > item[1]) {
                swap(item[0], item[1]);
            }
        }

        sort(all(conflictingPairs));

        const int m = sz(conflictingPairs);
        priority_queue<tpl2, vector<tpl2>, greater<tpl2>> pq;
        vector<ll> bonus(m);

        ll validSubarraysCount = 0LL;
        for (int i = n, j = m - 1; i >= 1; i--) {
            while (j >= 0 && conflictingPairs[j][0] >= i) {
                pq.emplace(conflictingPairs[j][1], j);
                j--;
            }

            if (pq.size() == 0) {
                validSubarraysCount += (n + 1 - i);
                // println(i, n + 1, n + 1);
                continue;
            }

            auto top = pq.top(); pq.pop();
            auto [mn, ind] = top;

            int mn2 = n + 1;
            if (pq.size() > 0) {
                mn2 = pq.top().first;
            }
            pq.push(top);

            // println(i, mn, mn2);
            validSubarraysCount += mn - i;
            bonus[ind] += mn2 - mn;
        }

        return validSubarraysCount + *max_element(all(bonus));
    }
};