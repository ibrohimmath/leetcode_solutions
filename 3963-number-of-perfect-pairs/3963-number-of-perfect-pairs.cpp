#define all(x) (x).begin(), (x).end()
#define ll long long
#define each(item, a) for (auto& item : a)
#define sz(a) a.size()

class Solution {
public:
    template<typename ...Args>
    void println(Args ...args) {
        if constexpr (sizeof...(args) == 0) {
            cout << "\n";
        } else {
            ((cout << args << ' '), ...);
            cout << "\n";
        }
    }

    long long perfectPairs(vector<int>& nums) {
        const int n = sz(nums);
        ll ans = 0LL;

        each(item, nums) 
            item = abs(item);

        sort(all(nums), [&](int &x, int &y) {
            return x < y;
        });

        // each(item, nums)
        //     cout << item << ' ';
        // println();

        for (int i = 0, j = 1; i < n; i++) {
            while (j < n && nums[j] <= 2 * nums[i]) {
                j++;
            }
            ans += (j - i - 1);
        }

        return ans;
    }
};