function numberOfAlternatingGroups(colors: number[], k: number): number {
    function rangeCount(l: number, r: number) {
        if (pref[r] >= r - l + 1) {
            return r - l + 1;
        } else {
            return pref[r];
        }
        // return pref[r] - pref[l] + Number(l > 0 ? colors[l] !== colors[l - 1] : 1);
    }
    
    const n: number = colors.length;

    const pref: number[] = Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        if (i > 0) {
            pref[i] = colors[i] !== colors[i - 1] ? pref[i - 1] + 1 : 1;
        } else {
            pref[i] = 1;
        }
    }

    let counter: number = 0;
    for (let i = 0; i < n; i++) {
        if (i >= k - 1) {
            // console.log(i - k + 1, i, rangeCount(i - k + 1, i));
            counter += Number(rangeCount(i - k + 1, i) === k);
        } else {
            // console.log(colors.at(0), colors.at(-1));
            // console.log(0, i, rangeCount(0, i));
            // console.log(n - k + i + 1, n - 1, rangeCount(n - k + i + 1, n - 1));
            counter += Number(colors.at(0) !== colors.at(-1) && rangeCount(0, i) + rangeCount(n - k + i + 1, n - 1) === k);
        }
        // console.log(counter, "###");
    }

    return counter;
};