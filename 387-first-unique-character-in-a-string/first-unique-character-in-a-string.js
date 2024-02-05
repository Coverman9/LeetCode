/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let sliced = ''
    for (let i = 0; i < s.length; i++) {
        let word = s.slice(i + 1)
        if (!word.includes(s[i]) && !sliced.includes(s[i])) {
            return i
        } else {
            sliced += s[i]
        }
    }
    return -1
};