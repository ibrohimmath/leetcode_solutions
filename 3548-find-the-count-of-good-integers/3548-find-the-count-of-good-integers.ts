function countGoodIntegers(n: number, k: number): number {
    function combs(args: number[]) {
        const sm: number = args.reduce((acc, item) => acc + item, 0);
        let combs: number = fact[sm];
        for (const item of args) {
            combs /= fact[item];
        }
        return combs;
    }

    const fact: number[] = Array(11).fill(1);
    for (let i = 2; i <= 10; i++) {
        fact[i] = fact[i - 1] * i;
    }

    if (n == 1) {
        return k < 10 ? Math.floor(9 / k) : 0;
    }
    
    const memo: Set<string> = new Set();
    const isOdd: boolean = n % 2 == 1; 
    let ans: number = 0;
    n = Math.floor((n + 1) / 2); 
    const used: Set<boolean> = new Set<boolean>();
    for (let i = Math.pow(10, n - 1); i < Math.pow(10, n); i++) {
        let j: number = i;
        if (isOdd) {
            j = Math.floor(i / 10);
        }

        let str: string = i.toString();
        str += j.toString().split('').reverse().join('');
        if (+str % k != 0) {
            continue;
        }
        const counter: number[] = Array(10).fill(0);
        for (let j = 0; j < str.length; j++) {
            counter[+str[j]]++;
        }
        let r: number = combs(counter);
        let l: number = 0;
        if (--counter[0] >= 0) {
            l = combs(counter);
        }
        const hash: string = counter.join("#");
        if (memo.has(hash)) continue; 
        ans += r - l;
        memo.add(hash);
        // console.log(str, r, l);
    }
    return ans;
};