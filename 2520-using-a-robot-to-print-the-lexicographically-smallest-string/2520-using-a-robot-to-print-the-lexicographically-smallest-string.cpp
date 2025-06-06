class Solution {
public:
    string robotWithString(string s) {
        const int n = s.size();
        set<pair<char, int>> st; 
        for (int i = 0; i < n; i++) {
            st.emplace(s[i], i);
        }
        vector<char> t;
        auto [c, start] = *st.begin(); st.erase(st.begin());
        string ans;
        ans.push_back(c);

        int l = start + 1;
        for (int i = 0; i < start; i++) {
           t.push_back(s[i]);
        }

        while (l < n && st.size() > 0) {
            while (st.begin()->second < l) {
                st.erase(st.begin());
            }
            if (t.size() == 0 || t.back() > st.begin()->first) {
                ans.push_back(st.begin()->first);
                for (int i = l; i < st.begin()->second; i++) {
                    t.push_back(s[i]);
                }
                l = st.begin()->second + 1; 
            } else {
                ans.push_back(t.back());
                t.pop_back();
            }
        }

        while (t.size() > 0) {
            ans.push_back(t.back());
            t.pop_back();
        }
        return ans;
    }
};