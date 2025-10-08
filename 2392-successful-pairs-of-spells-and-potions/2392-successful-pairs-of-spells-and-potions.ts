function successfulPairs(spells: number[], potions: number[], success: number): number[] {
    const spellsNew = spells.map((item, ind) => [item, ind]);
    console.log(spellsNew);

    potions.sort((x, y) => x - y);
    spellsNew.sort((x, y) => x[0] - y[0]);

    const ans: number[] = Array(spells.length).fill(0);

    let l: number = 0, r: number = spellsNew.length - 1;
    while (r >= 0 && l < potions.length) {
        while (l < potions.length && potions[l] * spellsNew[r][0] < success) {
            l++;
        }
        if (l >= potions.length) {
            ans[spellsNew[r][1]] = 0;
            continue;
        }
        ans[spellsNew[r][1]] = potions.length - l;
        
        r--;
    }

    return ans;
};