function numRabbits(answers: number[]): number {
    const counter = Array<number>(1001).fill(0);
    for (const item of answers) {
        counter[item]++;
    }
    let rabbits: number = 0; 
    for (let i = 0; i < 1001; i++) {
        if (counter[i] == 0) continue; 
        const l: number = i + 1;
        rabbits += Math.ceil(counter[i] / l) * l;
    }
    return rabbits;
};