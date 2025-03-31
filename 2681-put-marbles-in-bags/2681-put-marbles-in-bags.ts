function putMarbles(weights: number[], k: number): number {
    let initial: number = weights.at(0) + weights.at(-1);
    const p: number[] = [];
    for (let i = 0; i < weights.length - 1; i++) {
        p.push(weights[i] + weights[i + 1]);
    }
    p.sort((x, y) => x - y);
    let mn: number = initial, mx: number = initial;
    for (let i = 0; i < k - 1; i++) {
        mn += p[i];
        mx += p[p.length - 1 - i];
    }
    return mx - mn;
};