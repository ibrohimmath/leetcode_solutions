class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        n = len(nums) 
        h = []
       
        for i in range(k):
            heapq.heappush(h, nums[i])

        for i in range(k, n):
            if nums[i] > h[0]:
                heapq.heappushpop(h, nums[i])
            
        return h[0]
        
