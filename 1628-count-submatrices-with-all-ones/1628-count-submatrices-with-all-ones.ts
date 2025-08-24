function numSubmat(mat: number[][]): number {
    const m: number = mat.length;
    const n: number = mat[0].length;

    let ans: number = 0;
    const height: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

    const dp: number[][] = Array.from({ length: m }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        const st: number[] = [];
        for (let j = 0; j < n; j++) {
            if (mat[i][j] == 0) {
                st.push(j);
                continue;
            }

            height[i][j] = (i > 0 ? height[i - 1][j] : 0) + 1;

            while (st.length > 0 && height[i][st.at(-1)] >= height[i][j]) {
                st.pop();
            }

            if (st.length > 0) {
                const last: number = st.at(-1);
                dp[i][j] = dp[i][last] + (j - last) * height[i][j];
            } else {
                dp[i][j] = (j + 1) * height[i][j];
            }

            ans += dp[i][j];
            st.push(j);
        }
    }

    return ans;
};