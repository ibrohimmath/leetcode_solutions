function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const spellsPair = spells.map((s, ind) => [s, ind]);
    spellsPair.sort((x, y) => x[0] - y[0]);
    potions.sort((x, y) => x - y);
    
    const pairs = Array(spellsPair.length).fill(0);
    for (let r = 0, l = spellsPair.length - 1; r < potions.length; r++) {
        while (l >= 0 && spellsPair[l][0] * potions[r] >= success) {
            pairs[spellsPair[l][1]] = potions.length - r;
            l--;
        }
    }

    return pairs;
};