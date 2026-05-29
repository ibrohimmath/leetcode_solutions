class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        m, n = len(nums1), len(nums2)
        if m > n: 
            m, n = n, m
            nums1, nums2 = nums2, nums1

        INF_MAX = int(1e9)
        INF_MIN = -INF_MAX

        l, r = 0, m
        while l <= r:
            x = (l + r) // 2
            y = (m + n + 1) // 2 - x

            maxA = nums1[x - 1] if x > 0 else INF_MIN
            minA = nums1[x] if x < m else INF_MAX

            maxB = nums2[y - 1] if y > 0 else INF_MIN
            minB = nums2[y] if y < n else INF_MAX

            # print(x, y)
            # print(maxA, maxB)

            if maxA <= minB and maxB <= minA:
                if (m + n) & 1 == 0:
                    return (max(maxA, maxB) + min(minA, minB)) / 2
                return max(maxA, maxB)
            elif maxA > minB:
                r = x - 1
            else:
                l = x + 1

        return 0
                