function numberOfSubstrings(s: string): number {
    // condition: ones >= zeros * zeros
    const N: number = s.length;
    const zeros: number[] = [];
    let ans: number = 0;
    for (let i = 0; i < N; i++) {
        if (s[i] == '0')
            zeros.push(i);
        else
            ans += i - (zeros?.at(-1) ?? -1);
        for (let j = zeros.length - 1; j >= 0; j--) {
            const curr: number = zeros[j], prev: number = j > 0 ? zeros[j - 1] : -1;
            const zerosCount: number = zeros.length - j;
            const onesCount: number = (i - prev) - zerosCount;
            if (zerosCount * zerosCount > (i + 1 - zerosCount)) 
                break;
            // console.log(i, curr, prev, zerosCount, onesCount);
            ans += Math.max(0, Math.min(curr - prev, onesCount - zerosCount * zerosCount + 1));
        }
    }
    return ans;
};