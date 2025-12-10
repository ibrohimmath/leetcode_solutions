#define all(x) (x).begin(), (x).end()
#define each(item, a) for (auto& item : a)

class Solution {
public:
    using vect = vector<int>;

    template<typename... Args>
    void println(Args... args) {
        ((cout << args << ' '), ...);
        cout << "\n";
    }

    int countPermutations(vector<int>& complexity) {
        const int N = 1e5 + 1;
        const int MOD = 1e9 + 7;
        int pos = complexity[0];
        int mn = *min_element(all(complexity));
        if (mn != pos) {
            return 0;
        }
        int mnCount = 0;
        each(item, complexity) {
            mnCount += (int)(item == mn);
        }
        if (mnCount > 1) return 0;

        long long ans = 1;
        for (int i = 1; i < (int)size(complexity); i++) {
            ans = ans * i % MOD;
        }
        return (int)ans;
    }
};