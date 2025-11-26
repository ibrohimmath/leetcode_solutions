struct DSU {
    int n;
    vector<int> par;

    DSU(int _n) : n(_n) {
        par.resize(n);
        for (int i = 0; i < n; i++) {
            par[i] = i;
        }
    }

    int find_set(int i) {
        if (par[i] == i) {
            return i;
        }
        return par[i] = find_set(par[i]);
    }

    void union_sets(int x, int y) {
        x = find_set(x);
        y = find_set(y);

        if (x == y) return;
        if (x < y) {
            par[y] = x;
        } else {
            par[x] = y;
        }
    }
};

class Solution {
public:
    vector<int> processQueries(int c, vector<vector<int>>& connections, vector<vector<int>>& queries) {
        const int L = 1e5 + 1;
        vector<int> color(L, -1);
        unordered_map<int, priority_queue<int, vector<int>, greater<int>>> mp;    
        DSU* dsu = new DSU(L);
        for (auto& lst : connections) {
            dsu->union_sets(lst[0], lst[1]);
        }

        for (auto& lst : connections) {
            int x = lst[0], y = lst[1];
            int p = dsu->find_set(x);

            if (mp.find(p) == mp.end()) {
                mp[p] = priority_queue<int, vector<int>, greater<int>>();
            }
            auto& pq = mp[p];

            if (color[x] == -1) {
                pq.push(x);
            }
            if (color[y] == -1) {
                pq.push(y);
            }
            color[x] = color[y] = 1;
        }

        vector<int> ans;
        for (auto& lst : queries) {
            int type = lst[0], node = lst[1];
            if (type == 1) {
                if (color[node] != 0) {
                    ans.push_back(node);
                } else {
                    int parentNode = dsu->find_set(node);
                    if (mp.find(parentNode) == mp.end()) {
                        ans.push_back(-1);
                    } else {
                        priority_queue<int, vector<int>, greater<int>>& pq = mp[parentNode];
                        if (size(pq) == 0) {
                            ans.push_back(-1);
                        } else {
                            ans.push_back(pq.top());
                        }
                    }
                }
            } else {
                color[node] = 0;
                int parentNode = dsu->find_set(node);
                if (mp.find(parentNode) != mp.end()) {
                    priority_queue<int, vector<int>, greater<int>>& pq = mp[parentNode]; 
                    while (size(pq) > 0 && color[pq.top()] == 0) {
                        pq.pop();
                    }
                }
            }
        }

        return ans;
    }
};