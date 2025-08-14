public class Solution {
    public string LargestGoodInteger(string num) {
        string ans = ""; 

        for (int i = 0; i < num.Length - 2; i++) {
            if (num[i] != num[i + 1] || num[i] != num[i + 2]) {
                continue;
            } 
            if (ans == "" || ans[0] < num[i]) {
                ans = num[i..(i + 3)];
            }
            i += 2;
        }

        return ans;
    }
}