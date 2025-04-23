function countLargestGroup(n: number): number {
    const counter = Array<number>(37).fill(0);
    for (let i = 1; i <= n; i++) {
        const lst: number[] = i.toString().split('').map(Number);
        const sm: number = lst.reduce((acc, item) => acc + item, 0);
        counter[sm]++;
    }
    const mx = Math.max(...counter);
    return counter.filter(item => item == mx).length;
};