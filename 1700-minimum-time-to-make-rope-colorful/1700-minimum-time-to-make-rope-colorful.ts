function minCost(colors: string, neededTime: number[]): number {
    let sm: number = 0;

    let window: number = neededTime[0], mx: number = neededTime[0], len: number = 1;
    for (let i = 1; i < colors.length; i++) {
        if (colors[i] == colors[i - 1]) {
            window += neededTime[i];
            mx = Math.max(mx, neededTime[i]);
            len++;
        } else {
            if (len > 1) {
                sm += window - mx;
            }
            window = neededTime[i];
            mx = neededTime[i];
            len = 1;
        }
    }

    if (len > 1) {
        sm += window - mx;
    }

    return sm;
};