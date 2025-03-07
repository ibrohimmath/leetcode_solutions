function groupAnagrams(strs: string[]): string[][] {
    const mp = new Map<string, string[]>();
    for (const word of strs) {
        const sorted: string = word.split('').sort().join('');
        mp.set(sorted, (mp.get(sorted) ?? []).concat([word]));
    }
    return Array.from(mp.values());
};