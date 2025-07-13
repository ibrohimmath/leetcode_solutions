function latestTimeCatchTheBus(buses: number[], passengers: number[], capacity: number): number {
    buses.sort((x, y) => x - y);
    passengers.sort((x, y) => x - y);
    const used: Set<number> = new Set();

    let i: number = 0;
    let ans: number = 0;
    outer: for (const [ind, departTime] of buses.entries()) {
        let j: number;
        const clients: number[] = [];

        for (j = i; j < passengers.length && 
            clients.length < capacity && 
            passengers[j] <= departTime; j++) {
            clients.push(passengers[j]);
            used.add(passengers[j]);
        }
        if (j > i) {
            i = j;
        }

        if (clients.length < capacity) {
            if (clients.length && clients.at(-1) < departTime || clients.length == 0) {
                ans = Math.max(ans, departTime);
            }
        }

        for (let k = clients.length - 1; k >= 1; k--) {
            if (clients[k] != clients[k - 1] + 1) {
                ans = Math.max(ans, clients[k] - 1);
                continue outer;
            }
        }

        if (clients.length > 0 && !used.has(clients[0] - 1)) {
            ans = Math.max(ans, clients[0] - 1);
        }
    }

    return ans;
};