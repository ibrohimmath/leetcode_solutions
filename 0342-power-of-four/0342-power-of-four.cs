public class Solution {
    public bool IsPowerOfFour(int n) {
        while (n >= 4 && n % 4 == 0) {
            n /= 4;
        }        
        return (n == 1);
    }
}