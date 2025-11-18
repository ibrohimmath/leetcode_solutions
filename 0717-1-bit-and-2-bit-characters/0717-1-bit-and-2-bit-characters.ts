function isOneBitCharacter(bits: number[]): boolean {
    for (let i = 0; i < bits.length; i++) {
        if (i == bits.length - 2 && bits[i] == 1) return false;
        if (bits[i]) i++;
    }
    return true;
};