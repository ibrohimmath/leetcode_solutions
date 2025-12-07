class Solution:
    def binpow(self, a: int, n: int, mod: int) -> int:
        if a == 0:
            return 0
        if n == 0:
            return 1
        res = 1
        while n > 0:
            if n & 1:
                res = res * a % mod
            a = a * a % mod
            n //= 2
        return res
    
    def inverse(self, a: int, mod: int) -> int:
        return self.binpow(a, mod - 2, mod)

    def countTrapezoids(self, points: List[List[int]]) -> int:
        MOD = int(1e9 + 7)
        mp = {}
        for x, y in points:
            mp[y] = mp.get(y, 0) + 1

        pref, ans = 0, 0
        for count in mp.values():
            segments = (count * (count - 1) % MOD) * self.inverse(2, MOD) % MOD
            ans = (ans + pref * segments % MOD) % MOD
            pref = (pref + segments) % MOD

        return ans
