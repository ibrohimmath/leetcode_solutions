using ll = long long;

class Solution {
    constexpr static inline int MOD = (int)1e9 + 7;

    vector<vector<ll>> X, Y;

    static inline vector<vector<ll>> mult(vector<vector<ll>> A, vector<vector<ll>> B) {
        const int m = size(A), n = size(A[0]), k = size(B[0]);
        // cout << m << ' ' << n << " | " << size(B) << ' ' << k << "\n";
        assert(size(A[0]) == size(B));

        vector<vector<ll>> R(m, vector<ll>(k));

        for (int z = 0; z < k; ++z) {
            for (int i = 0; i < m; ++i) {
                for (int j = 0; j < n; ++j) {
                    R[i][z] = (R[i][z] + A[i][j] * B[j][z] % MOD) % MOD;
                }
            }
        }

        return R;
    }

    static inline vector<vector<ll>> pow(vector<vector<ll>> A, int n) {
        const int m = size(A);
        vector<vector<ll>> R(m, vector<ll>(m));
        for (int i = 0; i < m; ++i) R[i][i] = 1;

        if (n == 0) return R;
        if (n == 1) return A;

        while (n > 0) {
            // cout << size(R) << ' ' << size(R[0]) << " | " << size(A) << ' ' << size(A[0]) << "\n";
            if (n & 1) R = mult(R, A);
            A = mult(A, A);
            n /= 2;
        }

        return R;
    }

    vector<vector<ll>> calc(vector<vector<ll>> A0, vector<vector<ll>> B0, int n, bool isLeft) {
        if (isLeft) {
            if (n & 1) {
                vector<vector<ll>> C = mult(Y, X);
                C = pow(C, (n - 1) / 2);
                return mult(A0, C);
            }
            else {
                vector<vector<ll>> C = mult(X, Y); 
                C = pow(C, (n - 1) / 2);
                return mult(mult(B0, C), X);
            }
        }
        else {
            if (n & 1) {
                vector<vector<ll>> C = mult(X, Y);     
                C = pow(C, (n - 1) / 2);
                return mult(B0, C);
            }
            else {
                vector<vector<ll>> C = mult(Y, X);
                C = pow(C, (n - 1) / 2);
                return mult(mult(A0, C), Y);
            }
        }
    }

    template<typename T>
    static inline void output(vector<vector<T>> A) {
        for (const auto& r : A) {
            for (const int& item : r) cout << item << ' ';
            cout << "\n";
        }
        cout << "\n";
    }

public:
    int zigZagArrays(int n, int l, int r) {
        const int m = r - l + 1;

        // A(0), B(0)
        vector<vector<ll>> A0(1, vector<ll>(m, 1LL)), B0(1, vector<ll>(m, 1LL));

        X.resize(m, vector<ll>(m));
        Y.resize(m, vector<ll>(m));

        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < m; ++j) {
                if (i > j) X[i][j] = 1LL;
                else if (i < j) Y[i][j] = 1LL;
            }
        }

        // output(X);
        // output(Y);

        for (int i = 0; i < m; ++i) {
            A0[0][i] = m - 1 - i;
            B0[0][i] = i;
        }

        // output(A0);
        // output(B0);

        vector<vector<ll>> XY = mult(X, Y), YX = mult(Y, X);

        // output(XY);
        // output(YX);

        n--;
        vector<vector<ll>> A = calc(A0, B0, n, true), B = calc(A0, B0, n, false);

        // output(A);
        // output(B);

        ll sm = 0LL;
        for (int i = 0; i < m; ++i) sm = (sm + A[0][i] + B[0][i]) % MOD;

        return sm;
    }
};

auto init = []() {
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);

    return;
};

// DP
// dp[i][x][0] = for y in [x + 1, r]: add dp[i - 1][y][1]
// dp[i][x][1] = for y in [0, x - 1]: add dp[i - 1][y][0]

// Deriving Matrix exponentiation

// Example #1
// n = 3
// [1, 3]

// A[1] = 2 1 0
// B[1] = 0 1 2

// A[1] = dp[1][0], dp[2][0], dp[3][0]
// B[1] = dp[1][1], dp[2][1], dp[3][1]

// A[2] = dp[2][1] + dp[3][1] dp[3][1] 0
// B[2] = 0  dp[1][0]  dp[1][0] + dp[2][0]

// A[2] = B[1] * X
// B[2] = A[1] * Y

// A[3] = B[2] * X = A[1] * YX
// B[3] = A[2] * Y = B[1] * XY

// A[4] = B[3] * X = B[1] * XY * X
// B[4] = A[3] * Y = A[1] * YX * Y

// X 
// [0 0 0]
// [1 0 0]
// [1 1 0]

// Y
// [0 1 1]
// [0 0 1]
// [0 0 0]


// Example #2
// n=3 
// [4 5]

// A1 = 1 0
// B1 = 0 1

// A1 = dp[1][4][0] dp[1][4][1]
// B1 = dp[1][5][0] dp[1][5][1]

// A2 = dp[2][4][0] dp[2][5][0]
// B2 = dp[2][4][1] dp[2][5][1]

// A2 = dp[1][5][1] 0
// B2 = 0 dp[1][4][0]

// A2 = B1 * X        
// B2 = A1 * Y

// A3 = B2 * X = A1 * YX
// B3 = A2 * Y = B1 * XY

// A4 = B3 * X = B1 * XY X
// B4 = A3 * Y = A1 * YX Y

// A5 = A1 * (YX)^2
// B5 = B1 * (XY)^2
          
// X
// [0 0]
// [1 0]

// Y
// [0 1]
// [0 0]

// A(i) = B(i - 1) * X
// B(i) = A(i - 1) * Y