function reverseWords(s: string): string {
    return s.split(' ').map(word => word.trim()).filter(w => w.length).reverse().join(' ');
};