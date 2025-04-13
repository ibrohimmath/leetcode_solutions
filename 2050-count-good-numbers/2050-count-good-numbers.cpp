class Solution {
public:
    int MOD = 1e9 + 7;
    long long binpow(long long a, long long n) {
        if (a == 0) {
            return 0; 
        }
        if (n == 0) {
            return 1;
        }
        long long res = 1;
        while (n > 0) {
            if (n % 2 == 1) {
                res = res * a % MOD;
            }
            a = a * a % MOD;
            n = n / 2;
        }
        return res;
    }
    int countGoodNumbers(long long n) {
        return int(binpow(5, (n + 1) / 2) * binpow(4, n / 2) % MOD);
    }
};