function matchPlayersAndTrainers(players: number[], trainers: number[]): number {
    players.sort((x, y) => x - y);
    trainers.sort((x, y) => x - y);

    let ans: number = 0;
    let t: number = trainers.length - 1, p: number = players.length - 1; 
    while (t >= 0 && p >= 0) {
        if (trainers[t] >= players[p]) {
            ans++;
            t--;
        } 
        p--;
    }

    return ans;
};