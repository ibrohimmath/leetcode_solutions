#define each(item, a) for (auto &item : a)
#define all(x) (x).begin(), (x).end()

template<typename ...Args>
void out(Args... args) {
    ((cout << args << ' '), ...) << '\n';
}

class Solution {
public:
    int maxEvents(vector<vector<int>>& events) {
        sort(all(events));
        reverse(all(events));
        priority_queue<int, vector<int>, greater<int>> pq;

        int ans = 0;
        for (int i = 1; i <= 1e5; i++) {
            while (events.size() > 0 && events.back()[0] <= i) {
               pq.push(events.back()[1]);
               events.pop_back();
            }

            while (!pq.empty() && pq.top() < i) {
                // out("erased", pq.top(), i);
                pq.pop();
            }
            
            if (!pq.empty() && pq.top() >= i) {
                // cout << pq.top() << ' ' << i << "\n";
                // out(pq.top(), i);
                pq.pop();
                ans++;
            }

        }

        return ans;
    }
};