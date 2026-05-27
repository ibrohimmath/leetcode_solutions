class Solution {
    static inline short exist[26];
public:
    int numberOfSpecialChars(string word) {
        const int n = (int)size(word);
        fill(exist, exist + 26, 0);

        int ans = 0;
        for (int i = 0; i < n; ++i) {
            int ord = word[i] >= 'a' ? word[i] - 'a' : word[i] - 'A';
            if (word[i] >= 'a') {
                if (exist[ord] / 10 % 10 == 1) {
                    exist[ord] = exist[ord] / 10 * 10;
                    continue;
                }
                exist[ord] = exist[ord] / 10 * 10 + 1;
            } else {
                exist[ord] = exist[ord] % 10 + 10;
            }
        }

        for (const short& c : exist) {
            // cout << c << ' ';
            ans += (int)(c == 11);
        }
        return ans;
    }
};