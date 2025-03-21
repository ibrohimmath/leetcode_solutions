class Solution {
public:
    map<string, bool> canBe;
    map<string, vector<string>> g;
    set<string> vis;

    bool dfs(string node) {
        if (vis.find(node) != vis.end()) {
            return canBe[node];
        }
        vis.insert(node);
        
        if (g.find(node) == g.end()) {
            return canBe[node] == true;
        }

        for (const string &adjNode : g[node]) {
            if (!dfs(adjNode)) {
                return canBe[node] = false;
            }
        }

        return canBe[node] = true; 
    }

    vector<string> findAllRecipes(vector<string>& recipes, vector<vector<string>>& ingredients, vector<string>& supplies) {
        const int n = recipes.size();
        for (const string &supply : supplies) {
            canBe[supply] = true;
        }
        
        for (int i = 0; i < n; i++) {
            for (const string &ingredient : ingredients[i]) {
                g[recipes[i]].push_back(ingredient);
            }
        }

        for (const auto &[ingredient, _] : g) {
            dfs(ingredient);
        }

        vector<string> ans;
        for (const string &recipe : recipes) {
            if (!canBe[recipe]) continue;
            ans.push_back(recipe);
        }
        return ans;
    }
};