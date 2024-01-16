/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let word = ''
    for (let el of words) {
        word += el[0]
    }
    return word === s
};