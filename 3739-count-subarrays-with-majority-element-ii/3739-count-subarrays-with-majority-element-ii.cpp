class Solution {
public:
    long long mergeSort(vector<int>& nums, int l, int r) {
        if (r - l <= 1)
            return 0LL;

        int N = r - l; 
        int M = N / 2;
        vector<int> left(M), right(N - M);
        for (int i = l; i < r; i++) {
            int j = i - l;
            if (j < M) {
                left[j] = nums[i];
            } else {
                right[j - M] = nums[i];
            }
        }

        long long ans = mergeSort(left, 0, M) + mergeSort(right, 0, N - M);
        int i = 0, j = 0, k = l;
        while (i < M && j < N - M) {
            if (left[i] >= right[j]) {
                nums[k++] = right[j++];
            } else {
                ans += N - M - j;
                nums[k++] = left[i++];
            }
        }

        while (i < M) {
            nums[k++] = left[i++];
        }

        while (j < N - M) {
            nums[k++] = right[j++];
        }

        // for (int item : nums) {
        //     cout << item << ' ';
        // }
        // cout << "\n";
        // cout << l << ' ' << r << ' ' << ans << "\n";
        
        return ans;
    }

    long long countMajoritySubarrays(vector<int>& nums, int target) {
        int N = (int)nums.size();
        vector<int> pref(N);
        long long extra = 0LL;
        for (int i = 0; i < N; i++) {
            pref[i] = (i > 0 ? pref[i - 1] : 0) + 2 * (nums[i] == target) - 1;
            if (pref[i] > 0) extra++; 
        } 

        return mergeSort(pref, 0, N) + extra;
    }
};