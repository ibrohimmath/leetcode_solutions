function totalFruit(fruits: number[]): number {
    const n: number = fruits.length;

    const N: number = 1e5 + 1; 
    const counter: number[] = Array(N).fill(0);
    let mx: number = 0, unique: number = 0;

    for (let r: number = 0, l: number = 0; r < n; r++) {
        counter[fruits[r]]++;
        unique += Number(counter[fruits[r]] == 1); 

        while (l <= r && unique > 2) {
            counter[fruits[l]]--;
            unique -= Number(counter[fruits[l]] == 0);

            l++;
        }

        mx = Math.max(mx, r - l + 1);
    }

    return mx;
};