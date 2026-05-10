class Solution {
public:
    
    vector<vector<int>>g;
    vector<bool>seen;
    
    void dfs(int node){
        
        if (seen[node]) return;
        seen[node] = true;
        
        for(int &adjNode: g[node]){
            dfs(adjNode);
        }
    }
    
    int findCircleNum(vector<vector<int>>& isConnected) {
       
        int n = isConnected.size(), cnt = 0;
       
        g.resize(n + 1);
        seen.resize(n + 1, false);
       
        for (int i = 0; i < n; i ++){
            for (int j = 0; j < n; j ++){
                if(isConnected[i][j]){
                    g[i].push_back(j);
                    g[j].push_back(i);
                }
            }
        }
        
        for(int node = 0; node < n; node ++){
            if(!seen[node]){
                dfs(node);
                cnt ++;
            }
        }
        
        return cnt;
    }
};