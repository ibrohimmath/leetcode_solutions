/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function code(x: string) {
    return x.charCodeAt(0) - 'a'.charCodeAt(0);
}

class TrieNode {
    children: (TrieNode | null)[]; 
    counter: number[];
    
    constructor() {
        this.children = Array.from({length: 26}, () => null);
        this.counter = Array(26).fill(0);
    }
}

class Trie {
    root: TrieNode;
    sz: number = 0;

    constructor(n: number) {
        this.root = new TrieNode();
        this.sz = n;
    }

    build(word: string) {
        let node: TrieNode = this.root;

        for (let i = 0; i < word.length; i++) {
            if (!node.children[code(word[i])]) {
                node.children[code(word[i])] = new TrieNode();
            }
            node.counter[code(word[i])]++;
            node = node.children[code(word[i])];
        }
    } 

    search(word: string, callbackFn: CompareFn) {
        let node: TrieNode = this.root;

        let prefTemp: string = "";
        for (let i = 0; i < word.length && node && node.counter[code(word[i])] == this.sz; i++) {
            prefTemp += word[i];
            callbackFn(prefTemp);
            node = node.children[code(word[i])];
        }
    }
}

type CompareFn = (maxStr: string) => void;

function longestCommonPrefix(strs: string[]): string {
    function processWord(prefTemp: string) {
        if (prefTemp.length > pref.length) {
            pref = prefTemp;
        }
    }

    const n: number = strs.length;

    const trie = new Trie(n); 
    for (const word of strs) {
        trie.build(word);
    }
        
    let pref: string = "";    
    for (const word of strs) {
        trie.search(word, processWord);
    }

    return pref;
};
// @lc code=end

