class Solution {
    const static inline int N = 5e4 + 1;
    static inline bool vis[N];
public:
    bool canReach(vector<int>& arr, int start) {
        fill(vis, vis + N, false);
        const int n = (int)size(arr);

        queue<int> q;
        q.push(start);

        while (!q.empty()) {
            int node = q.front(); q.pop();
            if (arr[node] == 0) return true;
            vis[node] = true;

            if (node + arr[node] < n && !vis[node + arr[node]]) {
                q.push(node + arr[node]);
            }

            if (node - arr[node] >= 0 && !vis[node - arr[node]]) {
                q.push(node - arr[node]);
            }
        }

        return false;
    }
};