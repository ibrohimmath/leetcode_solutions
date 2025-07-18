using ll = long long;
using ld = long double;
#define all(x) (x).begin(), (x).end()
#define sz(a) (int)((a).size())
#define debug(x) cout << #x << ' ' << x << "\n";
#define each(i, a) for (auto &i : a)

class Solution {
public:
    ll minimumDifference(vector<int>& nums) {
        const int n = nums.size();
        const int m = n / 3;

        ll mn = 1e17;

        priority_queue<int, vector<int>, greater<int>> minHeap;
        vector<ll> suff(n, 0LL);
        ll sm = 0LL;

        for (int i = n - 1; i >= n - m; i--) {
            minHeap.push(nums[i]);
            sm += nums[i];
            suff[i] = sm;
        } 
        
        for (int i = n - m - 1; i >= m; i--) {
            if (minHeap.top() < nums[i]) {
                sm -= minHeap.top();
                minHeap.pop();

                sm += nums[i];
                minHeap.push(nums[i]);
            }
            suff[i] = sm;
        }

        sm = 0LL;
        priority_queue<int> maxHeap;

        for (int i = 0; i < m; i++) {
            maxHeap.push(nums[i]);
            sm += nums[i];
        }
        mn = min(mn, sm - suff[m]);

        for (int i = m; i <= n - m - 1; i++) {
            if (maxHeap.top() > nums[i]) {
                sm -= maxHeap.top();
                maxHeap.pop();

                sm += nums[i];
                maxHeap.push(nums[i]);
            }
            mn = min(mn, sm - suff[i + 1]); 
        }

        return mn;
    }
};