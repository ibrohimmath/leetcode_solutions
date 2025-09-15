function spellchecker(wordlist: string[], queries: string[]): string[] {
    function isVowel(c: string) {
        return 'aeiuo'.includes(c);
    } 

    function ignoreVowel(c: string) {
        return isVowel(c) ? '*' : c;
    }

    const exactSet: Set<string> = new Set(wordlist);
    const insensitiveMap: Map<string, string> = new Map();
    const vowelErrorsMap: Map<string, string> = new Map();

    for (const word of wordlist) {
       const wordLower: string = word.toLowerCase(); 
       const withoutVowels: string = wordLower.split('').map(ignoreVowel).join('');
       
       if (!insensitiveMap.has(wordLower)) insensitiveMap.set(wordLower, word);
       if (!vowelErrorsMap.has(withoutVowels)) vowelErrorsMap.set(withoutVowels, word);
    }

    for (let i = 0; i < queries.length; i++) {
        const query: string = queries[i];
        const queryLower: string = query.toLowerCase();
        const withoutVowels: string = queryLower.split('').map(ignoreVowel).join('');

        if (exactSet.has(query)) {
            continue;
        }

        if (insensitiveMap.has(queryLower)) {
            queries[i] = insensitiveMap.get(queryLower);
            continue;
        }

        if (vowelErrorsMap.has(withoutVowels)) {
            queries[i] = vowelErrorsMap.get(withoutVowels);
            continue;
        }

        queries[i] = "";
    }

    return queries;
};