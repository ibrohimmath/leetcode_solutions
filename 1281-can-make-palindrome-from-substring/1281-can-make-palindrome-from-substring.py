class Solution:
    def canMakePaliQueries(self, s: str, queries: List[List[int]]) -> List[bool]:
        def getOrder(c: str) -> int:
            return ord(c) - ord('a')

        L = len(s)
        pref = [[0] * 26 for _ in range(L + 1)]
        for i in range(L):
            order = getOrder(s[i])
            pref[i + 1] = pref[i][:]
            pref[i + 1][order] += 1

        ans = [False] * len(queries)

        for ind in range(len(queries)):
            l, r, k = queries[ind]

            counter = [0] * 26
            for i in range(26):
                counter[i] = pref[r + 1][i] - pref[l][i]

            counter.sort(reverse = True)

            midLen = min(26, (r - l + 2) // 2)

            minOps, oddCount = 0, 0
            for i in range(midLen):
                oddCount += (counter[i] & 1)

            if oddCount > 0:
                oddCount -= 1

            for i in range(midLen, 26):
                minOps += counter[i]

            oddCount -= min(oddCount, minOps)
            if oddCount > 0:
                minOps += (oddCount + 1) // 2

            ans[ind] = minOps <= k

        return ans