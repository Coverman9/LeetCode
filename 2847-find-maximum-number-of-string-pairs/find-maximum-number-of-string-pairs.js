/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
    let word = words.shift()
    let res = 0
    let len = words.length
    for (let i = 0; i < len; i++) {
        let word1 = word[0] + word[1]
        let word2 = word[1] + word[0]
        if (words.includes(word1) || words.includes(word2)) {
            res++
        }
        word = words.shift()
    }
    return res
};