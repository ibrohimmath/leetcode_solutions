function numberOfArrays(differences: number[], lower: number, upper: number): number {
    let item: number = 0, mn: number = 0, mx: number = 0; 
    for (const difference of differences) {
        item += difference;
        mn = Math.min(mn, item);
        mx = Math.max(mx, item);
    }
    if (mx - mn > upper - lower) {
        return 0;
    }
    if (mn <= lower) {
        return upper - (mx + lower - mn - 1);  
    } else if (mx >= upper) {
        return (mn - (mx - upper) + 1) - lower;
    } else {
        return (mn - lower) + (upper - mx + 1);
    }
};