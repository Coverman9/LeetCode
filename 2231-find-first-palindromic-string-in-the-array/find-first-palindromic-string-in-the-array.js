/**
 * @param {string[]} words
 * @return {string}
 */
const isPal = (s1, s2) => {
    return s1 === s2.split('').reverse().join('')
}
var firstPalindrome = function(words) {
    for (let word of words) {
        if (isPal(word, word)) return word
    }

    return ''
};