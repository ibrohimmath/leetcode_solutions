function divideString(s: string, k: number, fill: string): string[] {
    const lst: string[] = s.split(''); 

    const ans: string[] = [];
    for (let i = 0; i < s.length; i += k) {
        ans.push(lst.slice(i, Math.min(i + k, s.length)).join(''));
    }

    const list = ans.at(-1).split('');
    while (list.at(-1) == fill) list.pop();
    ans[ans.length - 1] = list.join('').padEnd(k, fill);
    return ans;
};