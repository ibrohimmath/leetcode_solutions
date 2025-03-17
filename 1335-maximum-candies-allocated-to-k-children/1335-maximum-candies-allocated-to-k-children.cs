public class Solution {
    public int MaximumCandies(int[] candies, long k) {
        long l = 0, r = (long)1e10, mid;
        while (l < r) {
            mid = (l + r + 1) / 2;
            
            long counter = 0;
            foreach (var item in candies) {
                counter += item / mid;
            }

            if (counter >= k) {
                l = mid;
            } else {
                r = mid - 1;
            }

            // Console.WriteLine(counter + " " + mid);
        }
        
        return (int)l;
    }
}