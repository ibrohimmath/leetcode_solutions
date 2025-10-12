using ll = long long;
using ld = long double;
#define all(x) (x).begin(), (x).end()
#define sz(a) (int)((a).size())
#define debug(x) std::cerr << #x << ' ' << x << "\n";
#define each(i, a) for (auto &i : a)

class Solution {
public:
    int N = 1e5;
    map<ll, int> mp;
    map<ll, map<ll, int>> mapA, mapB, mapC;

    template<typename ...Args>
    void println(Args ...args) {
        ((cout << args << ' '), ...);
        cout << '\n';
    }

    ll hash(int a, int b, int c) {
        return 1LL * a * N * N + 1LL * b * N + c;
    }

    ll hash2(int a, int b) {
        return 1LL * a * N + b;
    }

    int longestBalanced(string s) {
        int n = sz(s);

        int mx = 0;
        vector<int> counter(3, 0);

        for (int i = 0; i < n; i++) {
            counter[s[i] - 'a']++;
             
            bool isValid = true;
            int curr = -1;
            each(item, counter) {
                if (item == 0) continue;
                if (curr != -1 && curr != item) {
                    isValid = false;
                    break;
                }
                curr = item;
            }
            if (isValid) {
                mx = max(mx, i + 1);
            }

            int a = counter[0], b = counter[1], c = counter[2];

            int mn = *min_element(all(counter));
            ll h = hash(a - mn, b - mn, c - mn);
            if (mp.find(h) != mp.end()) {
                mx = max(mx, i - mp[h]);
            } else {
                mp[h] = i;
            }

            int mnA = min(b, c);
            ll hA = hash2(b - mnA, c - mnA); 
            if (mapA.find(a) == mapA.end() || mapA[a].find(hA) == mapA[a].end()) {
                mapA[a][hA] = i;
            } else {
                mx = max(mx, i - mapA[a][hA]);
            }

            int mnB = min(a, c);
            ll hB = hash2(a - mnB, c - mnB);
            if (mapB.find(b) == mapB.end() || mapB[b].find(hB) == mapB[b].end()) {
                mapB[b][hB] = i;
            } else {
                mx = max(mx, i - mapB[b][hB]);
            }

            int mnC = min(a, b);
            ll hC = hash2(a - mnC, b - mnC);
            if (mapC.find(c) == mapC.end() || mapC[c].find(hC) == mapC[c].end()) {
                mapC[c][hC] = i;
            } else {
                mx = max(mx, i - mapC[c][hC]);
            }
        }
        
        for (int i = 0; i < n; i++) {
            int j = i;
            while (j < n && s[i] == s[j]) {
                j++;
            }
            mx = max(mx, j - i);
            if (j > i) {
                i = j - 1;
            }
        }

        return mx;
    }
};