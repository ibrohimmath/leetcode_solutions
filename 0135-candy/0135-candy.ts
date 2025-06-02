function candy(ratings: number[]): number {
    const n: number = ratings.length;
    const left: number[] = Array(n).fill(1);
    const right: number[] = Array(n).fill(1);

    for (let i = 0; i < n; i++) {
        if (i && ratings[i] > ratings[i - 1]) {
            left[i] = left[i - 1] + 1;
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (i + 1 < n && ratings[i] > ratings[i + 1]) {
            right[i] = right[i + 1] + 1;
        }
    }

    let ans: number = 0;
    for (let i = 0; i < n; i++) {
        ans += Math.max(left[i], right[i]);
    }

    return ans;
};