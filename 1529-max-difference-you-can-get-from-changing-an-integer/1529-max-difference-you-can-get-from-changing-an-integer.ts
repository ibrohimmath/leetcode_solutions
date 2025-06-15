function maxDiff(num: number): number {
    const original: number[] = num.toString().split('').map(Number); 
    console.log(original);
    let mx: number = -1, mn: number = -1;

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            if (original[0] == i && j == 0) continue;
            const num: number = +original.map(d => d == i ? j : d).join(''); 
            // console.log(i, j, num);
            if (mx == -1 || mx < num) {
                mx = num;
                // console.log(num, "mx");
            }
            if (mn == -1 || mn > num) {
                mn = num;
                // console.log(num, "mn");
            }
        }
    }

    return mx - mn;
};