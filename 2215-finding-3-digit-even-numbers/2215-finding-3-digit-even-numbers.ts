function findEvenNumbers(digits: number[]): number[] {
    const counter = Array<number>(10).fill(0);
    for (const digit of digits) {
        counter[digit]++;
    }
    const ans: number[] = [];
    for (let i = 10; i < 100; i++) {
        const x = Math.floor(i / 10), y = i % 10;
        counter[x]--;
        counter[y]--;
        if (counter[x] < 0 || counter[y] < 0) {
            counter[x]++;
            counter[y]++;
            continue;
        }
        for (let j = 0; j < 10; j += 2) {
            if (counter[j] <= 0) {
                continue;
            }
            ans.push(100 * x + 10 * y + j);
        }
        counter[x]++;
        counter[y]++;
    }
    return ans;
};