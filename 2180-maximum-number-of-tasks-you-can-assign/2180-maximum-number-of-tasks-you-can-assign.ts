function maxTaskAssign(tasks: number[], workers: number[], pills: number, strength: number): number {
    function canTasksDone(tasksLen: number) {
        let l: number = 0, r: number = 0;
        const queue: number[] = Array(tasksLen).fill(-1);

        let counter: number = 0;
        for (let i = wLen - Math.min(wLen, tasksLen), j = 0, p = pills; i < wLen; i++) {
            while (j < tasksLen && tasks[j] <= workers[i] + strength) {
                queue[r] = tasks[j];
                r++;
                j++;
            }

            if (queue.length == 0) continue;

            if (l < r && queue.at(l) <= workers[i]) {
                l++;
                counter++;
            } else if (p > 0 && l < r) {
                r--; 
                p--;
                counter++;
            }
        }
        
        return (counter == tasksLen);
    }

    tasks.sort((x, y) => x - y);
    workers.sort((x, y) => x - y);

    const tLen: number = tasks.length, wLen: number = workers.length;

    let l: number = 0, r: number = tLen, mid: number;
    while (l < r) {
        mid = l + r + 1 >> 1;
        if (canTasksDone(mid)) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }

    return l;
};