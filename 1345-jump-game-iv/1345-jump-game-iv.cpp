class Solution {
    const inline static int N = 5e4 + 1;
    inline static bool vis[N];
    inline static unordered_map<int, vector<int>> g;
public:
    static int minJumps(vector<int>& arr) {
        g.clear();
        fill(vis, vis + N, false);

        const int n = (int)size(arr);
        for (int i = 0; i < n; ++i) {
            g[arr[i]].push_back(i);
        }

        queue<int> q;
        q.push(0); 
        int steps = 0;

        while (!q.empty()) {
            int sz = (int)size(q);

            while (sz-- > 0) {
                int node = q.front(); q.pop();
                if (vis[node]) continue;

                if (node == n - 1) return steps;

                if (node > 0 && !vis[node - 1]) {
                    q.push(node - 1);
                }
                if (node + 1 < n && !vis[node + 1]) {
                    q.push(node + 1);
                }
                // cout << node << ' ' << arr[node] << "\n";
                if (g.find(arr[node]) == g.end() || vis[g[arr[node]][0]]) continue;
                for (const int& adjNode : g[arr[node]]) {
                    if (vis[adjNode]) continue;
                    q.push(adjNode);
                }

                vis[node] = true;
            }
            
            steps++;
        }

        return steps;
    }
};