function sortVowels(s: string): string {
    function is_vowel(c: string) {
        c = c.toLowerCase();
        return ['a', 'e', 'i', 'u', 'o'].includes(c);
    }

    const lst: string[] = s.split('');
    const vowels: string[] = lst.filter(c => is_vowel(c));
    vowels.sort();

    for (let i = lst.length - 1; i >= 0; i--) {
        if (!is_vowel(lst[i])) continue;
        lst[i] = vowels.at(-1); vowels.pop();
    }

    return lst.join('');
};