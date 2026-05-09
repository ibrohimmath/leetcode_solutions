class Solution {
public:
    static string solve(string& s, int& i) {
        if (i >= size(s)) return "";

        int num = 0;

        vector<string> ans;
        while (i < size(s) && isdigit(s[i])) {
            num = num * 10 + (s[i] - '0');
            ++i;
        } 

        // [
        if (i < size(s) && s[i] == '[')
            ++i;

        num = max(num, 1);

        for (; i < size(s) && s[i] != ']'; ++i) {
            if (isdigit(s[i])) {
                ans.push_back(solve(s, i));
            } else {
                ans.push_back(string(1, s[i]));
            }
        }

        string temp;
        for (int t = 0; t < num; ++t) {
            for (string& item : ans) {
                temp += item;
            }
        }

        return temp;
    }

    static string decodeString(string s) {
        int n = size(s);

        int i = 0;
        string ans;

        for (; i < n; ++i) {
            ans += solve(s, i);
        }

        return ans;
    }
};

auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 0; 
};