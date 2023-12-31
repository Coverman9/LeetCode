/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let maxLen = -1;

    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j > i; j--) {
            if (s[i] === s[j]) {
                maxLen = Math.max(maxLen, j - (i + 1));
            }
        }
    }

    return maxLen;
}