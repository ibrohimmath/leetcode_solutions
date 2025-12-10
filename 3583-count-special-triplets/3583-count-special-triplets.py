class Solution:
    def specialTriplets(self, nums: List[int]) -> int:
        MOD = int(1e9 + 7)
        N = int(1e5 + 1)
        n = len(nums)

        counter = [0] * N 
        pref = [0] * N 

        for item in nums:
            counter[item] += 1
        
        ans = 0
        for item in nums:
            pref[item] += 1
            if item * 2 < N:
                left = pref[item * 2] - int(item == 0)
                right = counter[item * 2] - left - int(item == 0)
                # print(item, left, right)
                ans = (ans + left * right) % MOD 

        return ans