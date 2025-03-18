public class Solution {
    public int MaximumCount(int[] nums) {
        int negCount = nums.ToList().Aggregate(0, (acc, item) => acc + Convert.ToInt32(item < 0));
        int posCount = nums.ToList().Aggregate(0, (acc, item) => acc + Convert.ToInt32(item > 0));
        return Math.Max(negCount, posCount);
    }
}