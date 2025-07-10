function maxFreeTime(eventTime: number, startTime: number[], endTime: number[]): number {
    const a: number[] = [];
    
    let mx: number = 0;

    if (startTime[0]) {
        a.push(startTime[0]);
    }
    for (let i = 0; i < endTime.length - 1; i++) {
        if (a.length > 0) mx = Math.max(mx, startTime[i + 1] - endTime[i] + a.at(-1));
        a.push(startTime[i + 1] - endTime[i]);
    }
    if (endTime.at(-1) < eventTime) {
       if (a.length > 0) mx = Math.max(mx, eventTime - endTime.at(-1) + a.at(-1)); 
       a.push(eventTime - endTime.at(-1)); 
    }

    const pref: number[] = Array(a.length).fill(0);
    const suff: number[] = Array(a.length).fill(0);
    for (let i = 0; i < a.length; i++) {
        pref[i] = Math.max((i > 0 ? pref[i - 1] : 0), a[i]);
    }
    for (let i = a.length - 1; i >= 0; i--) {
        suff[i] = Math.max((i + 1 < a.length ? suff[i + 1] : 0), a[i]);
    }
    
    for (let i = 0; i < startTime.length; i++) {
        const ind: number = startTime[0] ? i : (i - 1);
        if (ind + 2 < a.length && endTime[i] - startTime[i] <= suff[ind + 2]) {
            // console.log(startTime[i], endTime[i], startTime[i + 1] - (i > 0 ? endTime[i - 1] : 0));
            mx = Math.max(mx, (i + 1 < startTime.length ? startTime[i + 1] : eventTime) - (i > 0 ? endTime[i - 1] : 0));
        }
        if (ind - 1 >= 0 && endTime[i] - startTime[i] <= pref[ind - 1]) {
            // console.log(startTime[i], endTime[i], startTime[i + 1] - (i > 0 ? endTime[i - 1] : 0));
            mx = Math.max(mx, (i + 1 < startTime.length ? startTime[i + 1] : eventTime) - (i > 0 ? endTime[i - 1] : 0));
        }
    }

    return mx;
};