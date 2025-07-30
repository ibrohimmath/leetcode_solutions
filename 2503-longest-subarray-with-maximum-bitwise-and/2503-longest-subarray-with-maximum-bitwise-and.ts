function longestSubarray(nums: number[]): number {
    let mx: number = Math.max(...nums), mxLen = 1;
    for (let i = 0, tempLen: number = 0; i < nums.length; i++) {
        if (nums[i] == mx) {
            mxLen = Math.max(mxLen, ++tempLen);
        } else {
            tempLen = 0;
        }
    }
    return mxLen; 
};