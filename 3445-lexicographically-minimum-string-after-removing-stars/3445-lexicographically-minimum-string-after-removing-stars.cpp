class Solution {
public:
    string clearStars(string s) {
        vector<vector<int>> a(26);
        for (int i = 0; i < s.size(); i++) {
            if (s[i] != '*') {
                int code = s[i] - 'a';
                a[code].push_back(i);
            } else {
                int j = 0;
                for (; j < 26 && a[j].size() == 0; j++);
                a[j].pop_back();
            }
        } 
        vector<pair<int, char>> pairs;
        for (int i = 0; i < 26; i++) {
            for (int pos : a[i]) {
                pairs.emplace_back(pos, char('a' + i));
            }
        }
        sort(pairs.begin(), pairs.end());
        string ans;
        for (auto &[_, c] : pairs) {
            ans.push_back(c);
        }
        return ans;
    }
};