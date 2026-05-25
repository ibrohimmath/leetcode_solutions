class Solution {
public:
    static bool canReach(string& s, int minJump, int maxJump) {
        int n = size(s);

        vector<int> pref(n);
        pref[0] = 1;

        for (int i = 1; i < n; ++i) {
            pref[i] = pref[i - 1];

            if (s[i] == '1') continue;

            int counter = 0;

            int r = i - minJump, l = max(0, i - maxJump);

            if (r >= 0 && r >= l) counter = pref[r] - (l > 0 ? pref[l - 1] : 0);

            if (counter > 0) {
                ++pref[i];
                if (i == n - 1) return true;
            }
        }

        return false;
    }
};

auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 0;
};