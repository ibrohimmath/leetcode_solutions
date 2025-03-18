public class Solution {
    public static bool isValid(int[] bitCounter) {
        for (int i = 0; i < 32; i++) {
            if (bitCounter[i] > 1) {
                return false;
            }
        }
        return true;
    } 

    public static void process(int num, int[] bitCounter, bool increase = true) {
        for (int i = 0; i < 32; i++) {
            if ((num >> i) % 2 == 1) {
                bitCounter[i] += 2 * Convert.ToInt32(increase) - 1;
            }
        }
    }

    public int LongestNiceSubarray(int[] nums) {
        int n = nums.Length;
        int[] window = new int[32]; 
        int mx = 0;

        for (int i = 0, l = 0; i < n; i++) {
            process(nums[i], window, true);

            while (l <= i && !isValid(window)) {
               process(nums[l], window, false); 
               l++;
            }

            mx = Math.Max(mx, i - l + 1);
        } 

        return mx;
    }
}