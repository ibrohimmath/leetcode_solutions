function countDays(days: number, meetings: number[][]): number {
    meetings.push([0, 0]);
    meetings.push([days + 1, days + 1]);
    meetings.sort((x, y) => x[0] != y[0] ? x[0] - y[0] : x[1] - y[1]);
    console.log(meetings);
    let counter = 0;
    for (let i = 0, right = meetings[i][0]; i < meetings.length; i++) {
        let j: number = i;
        while (j < meetings.length && Math.max(meetings[i][0], meetings[j][0]) <= Math.min(meetings[i][1], meetings[j][1])) {
            right = Math.max(right, meetings[j][1]); 
            j++;
        }
        j = Math.min(j, meetings.length - 1);
        // console.log(meetings[j], meetings[i]);
        // console.log(meetings[j][0], right);
        counter += Math.max(0, meetings[j][0] - right - 1);
        if (j > i) i = j - 1;
    }
    return counter;
};