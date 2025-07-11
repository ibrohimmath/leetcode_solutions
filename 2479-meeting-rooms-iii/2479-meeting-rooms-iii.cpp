#define each(item, a) for (auto &item : a)
#define all(x) (x).begin(), (x).end()

template <typename... Args>
void out(Args... args) {
    ((cout << args << ' '), ...) << '\n';
}

class Solution {
public:
    using tuple2 = pair<long long, int>;

    int mostBooked(int n, vector<vector<int>>& meetings) {
        sort(all(meetings));

        priority_queue<tuple2, vector<tuple2>, greater<tuple2>> pq;
        priority_queue<int, vector<int>, greater<int>> unused;
        vector<int> counter(n, 0);

        for (int i = 0; i < n; i++) {
            unused.push(i);
        }

        each(m, meetings) {
            while (!pq.empty() && pq.top().first <= m[0]) {
                unused.push(pq.top().second);
                pq.pop();
            }

            if (!unused.empty()) {
                counter[unused.top()]++;
                pq.emplace(m[1], unused.top());
                unused.pop();
            } else {
                auto [end, room] = pq.top(); pq.pop();
                counter[room]++;
                pq.emplace(0LL + m[1] - m[0] + end, room);
            }
        }

        int ind = 0;
        for (int i = 0; i < n; i++) {
            if (counter[i] > counter[ind]) {
                ind = i;
            }
        }
        return ind;
    }
};