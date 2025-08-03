using ll = long long;
#define all(x) (x).begin(), (x).end()
#define each(elem, a) for (auto &elem : a)

class Solution {
public:
    using tpl2 = pair<int, int>;
    using tpl3 = tuple<int, int, int>;

    template<typename... Args>
    void println(Args... args) {
        ((cout << args << ' '), ...) << "\n"; 
    }

    int maxPerformance(int n, vector<int>& speed, vector<int>& efficiency, int k) {
        const int N = speed.size();
        const int MOD = 1e9 + 7;
         
        vector<tpl2> arr;
        for (int i = 0; i < N; i++) {
            arr.emplace_back(efficiency[i], speed[i]);
        }
        sort(all(arr), greater<tpl2>());

        ll mx = 0LL, sm = 0LL;
        // priority_queue<tpl3, vector<tpl3>, greater<tpl3>> pq;
        priority_queue<tpl2, vector<tpl2>, greater<tpl2>> pq;
        for (int i = 0; i < N; i++) {
            mx = max(mx, 1LL * arr[i].first * arr[i].second);
        }
        for (int i = 0; i < min(k, N); i++) {
            pq.emplace(arr[i].second, arr[i].first);
            sm += arr[i].second;
            // println(arr[i].first, arr[i].second);
            mx = max(mx, sm * arr[i].first);
        }

        for (int i = k; i < N; i++) {
            sm -= pq.top().first; 
            pq.pop();
            pq.emplace(arr[i].second, arr[i].first);
            sm += arr[i].second;
            mx = max(mx, sm * arr[i].first);
        } 

        return static_cast<int>(mx % MOD);
    }
};