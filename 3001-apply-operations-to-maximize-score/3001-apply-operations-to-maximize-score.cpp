class Solution {
public:
    long long binpow(long long a, long long n, int mod) {
        long long res = 1;
        while (n > 0) {
            if (n % 2 == 1) res = res * a % mod;
            a = a * a % mod;
            n /= 2;
        }
        return res;
    }

    int maximumScore(vector<int>& nums, int k) {
        int n = nums.size();
        const int MOD = 1e9 + 7;
        
        vector<int> counter(n, 0);
        for (int i = 0; i < n; i++) {
            int num = nums[i];
            for (int j = 2; j * j <= num; j++) {
                if (num % j != 0) continue;
                while (num % j == 0) {
                    num /= j;
                }
                counter[i]++;
            }
            if (num > 1) counter[i]++;
        }

        vector<int> left(n, -1), right(n, n);
        stack<int> stck; 
        
        for (int i = 0; i < n; i++) {
            while (!stck.empty() && counter[stck.top()] < counter[i]) {
                stck.pop();
            }
            if (!stck.empty()) {
                left[i] = stck.top();
            }
            stck.push(i);
        }
        
        while (!stck.empty()) stck.pop();
        
        for (int i = n - 1; i >= 0; i--) {
            while (!stck.empty() && counter[stck.top()] <= counter[i]) {
                stck.pop();
            }
            if (!stck.empty()) {
                right[i] = stck.top();
            }
            stck.push(i);
        }

        vector<pair<int, int>> pairList;
        for (int i = 0; i < n; i++) {
            pairList.emplace_back(nums[i], i);
        } 
        sort(pairList.begin(), pairList.end(), [](const pair<int, int> &a, const pair<int, int> &b) {
            return a.first > b.first;
        });

        long long ans = 1;
        for (int i = 0; i < pairList.size() && k > 0; i++) {
            auto [item, ind] = pairList[i];
            long long degree = min(1LL * k, 1LL * (right[ind] - ind) * (ind - left[ind]));
            k -= (int)degree;
            ans = ans * binpow(item, degree, MOD) % MOD;
        } 

        return ans;
    }
};
