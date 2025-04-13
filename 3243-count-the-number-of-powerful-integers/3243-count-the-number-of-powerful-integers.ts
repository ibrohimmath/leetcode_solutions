function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
    function numberToList(num: number | string) {
        return num.toString().split('').map(Number);
    }
    function listToNumber(lst: number[]) {
        return +(lst.join(''));
    }

    function count(n: number) {
        if (n < 10) {
            return Math.min(limit, Math.max(n, 0));
        }
        if (memo.has(n)) {
            return memo.get(n);
        }

        const lst: number[] = numberToList(n);
        const len: number = lst.length;

        let ans: number = 0;
        for (let unit = 1, unitAns = 1; unit < len; unit++) {
            unitAns *= (unit == 1 ? limit : (limit + 1)); 
            ans += unitAns;

            const nines: number = Math.pow(10, unit) - 1;
            if (!memo.has(nines)) memo.set(nines, ans);
        }
        
        const ninesLess: number = Math.pow(10, len - 1) - 1;
        ans += Math.min(lst[0] - 1, limit) * (memo.get(ninesLess) + 1);
        if (lst[0] <= limit) {
            ans += count(n - lst[0] * Math.pow(10, len - 1)) + 1;
        }

        memo.set(n, ans);
        return ans;
    }
    function solve(n: number) {
        const lst: number[] = numberToList(n);
        const len: number = lst.length;

        if (len < k) {
            return 0;
        } else if (len === k) {
            if (n >= +s) {
                console.log(1);
                return 1;
            }
            console.log(0);
            return 0;
        }
        
        let first: number = listToNumber(lst.slice(0, len - k));
        let last: number = listToNumber(lst.slice(len - k));
        if (last < +s) {
            first--;
        }
        const ans: number = count(first) + 1;
        console.log(ans);
        return ans;
    }

    if (numberToList(s).some(x => x > limit)) {
        return 0;
    }
    
    const k: number = s.length;
    const memo: Map<number, number> = new Map();
    return solve(finish) - solve(start - 1);
};