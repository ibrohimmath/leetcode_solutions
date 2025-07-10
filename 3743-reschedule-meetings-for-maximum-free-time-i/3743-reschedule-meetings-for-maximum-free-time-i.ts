function maxFreeTime(eventTime: number, k: number, startTime: number[], endTime: number[]): number {
    const a: number[] = [];
    let l: number = 0, sm: number = 0, mx: number = 0; 

    k++;
    a.push(startTime[0]);
    sm += startTime[0];

    for (let i = 0; i < endTime.length; i++) {
        const gap: number = (i + 1 < startTime.length ? startTime[i + 1] : eventTime) - endTime[i];
        a.push(gap);
        sm += gap;
        if (a.length - l > k) {
           sm -= a[l++];
        }
        mx = Math.max(mx, sm);
    }

    return mx;
};