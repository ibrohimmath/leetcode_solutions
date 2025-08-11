class Solution {
public:
    vector<int> productQueries(int n, vector<vector<int>>& queries) {
        vector<int> lst;
        int bin = 1;

        while (n > 0) {
            if (n & 1) {
                lst.push_back(bin);
            }
            bin *= 2;
            n >>= 1;
        }        


        vector<int> ans;
        const int MOD = 1e9 + 7;
        for (auto &q : queries) {
            int temp = 1;
            for (int i = q[0]; i <= q[1]; i++) {
                temp = static_cast<int>(1LL * temp * lst[i] % MOD);
            }
            ans.push_back(temp);
        }

        return ans;        
    }
};