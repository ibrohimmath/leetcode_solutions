class Solution:
    def maxArea(self, height: List[int]) -> int:
        n = len(height)
        mx = 0

        l, r = 0, n - 1
        while (l < r):
            mx = max(mx, (r - l) * min(height[l], height[r])) 

            if (height[l] < height[r]):
                l += 1
            else:
                r -= 1 

        return mx