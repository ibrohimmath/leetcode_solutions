public class Solution {
    public int n;

    public int MinZeroArray(int[] nums, int[][] queries) {
        this.n = nums.Length; // Ensure 'n' is initialized properly

        Func<int, bool> check = ind => {  // Correct return type to 'bool'
            int[] temp = new int[n];  
            for (int i = 0; i <= ind; i++) {  // Fix loop variable
                int[] tuple = queries[i];
                int l = tuple[0], r = tuple[1], val = tuple[2]; 
                temp[l] += val;
                if (r + 1 < n) temp[r + 1] -= val;
            }

            for (int i = 1; i < n; i++) {
                temp[i] += temp[i - 1];
            }

            for (int i = 0; i < n; i++) {
                if (temp[i] < nums[i]) {
                    return false;
                }
            }
            return true;
        };

        bool needFix = false;
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] != 0) {
                needFix = true;
                break;
            } 
        }
        if (!needFix) {
            return 0;
        }

        int left = 0, right = queries.Length, mid; 
        while (left < right) {
            mid = (left + right) / 2;

            if (check(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return (right == queries.Length ? -1 : right + 1);
    }
}
