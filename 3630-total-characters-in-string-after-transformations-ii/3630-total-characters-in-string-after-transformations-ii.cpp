#define each(i, a) for (auto& i : a)
using ll = long long;
using vect = vector<ll>;
using mat = vector<vector<ll>>;

class Solution {
public:
    ll mod = 1e9 + 7;

    mat mult(mat& a, mat& b) {
        assert(a[0].size() == b.size());
        int m = a.size(), k = a[0].size(), n = b[0].size(); 

        mat c(m, vect(n, 0));
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                for (int z = 0; z < k; z++) {
                    c[i][j] = (c[i][j] + 1LL * a[i][z] * b[z][j] % mod) % mod;
                }
            }
        }

        return c;
    }

    mat binpow(mat& a, int n) {
        assert(a.size() == a[0].size());

        int len = a.size();
        mat res(len, vect(len, 0LL));
        for (int i = 0; i < len; i++) {
            res[i][i] = 1;
        }

        while (n > 0) {
            if (n & 1) {
                res = mult(res, a);
            }
            a = mult(a, a);
            n >>= 1;
        }

        return res;
    }

    int lengthAfterTransformations(string s, int t, vector<int>& nums) {
        mat counter(26, vect(1, 0LL)); 
        for (int i = 0; i < s.size(); i++) {
            counter[s[i] - 'a'][0]++;
        }

        mat a(26, vect(26, 0LL)); 
        for (int col = 0; col < nums.size(); col++) {
            for (int diff = 1; diff <= nums[col]; diff++) {
                int row = (col + diff) % 26;
                a[row][col]++;
            }
        }

        a = binpow(a, t);
        counter = mult(a, counter);
        ll ans = 0LL;
        each(i, counter) {
            ans = (ans + i[0]) % mod;
            // cout << i[0] << " ";
        }

        return (int)ans;
    }
};