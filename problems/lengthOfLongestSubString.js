const lengthOfLongestSubstring = function(s) {

    let map = {}
    let start = 0
    let maxLen = 0
    let arr = s.split('')

    for (let i=0; i < s.length; i++) {
        let current = map[arr[i]];
        if (current != null && start <= current) {
            start = current + 1;
        } else {
            maxLen = Math.max(maxLen, i - start + 1)
        }
        map[arr[i]] = i;
    }

    return maxLen;
};

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("cccc")); //1
console.log(lengthOfLongestSubstring("umesh")); 5
