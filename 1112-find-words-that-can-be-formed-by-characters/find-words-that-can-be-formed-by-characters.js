/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

var countCharacters = function(words, chars) {
    let res = 0;

    for (let word of words) {
        if (isWordFormed(word, chars)) {
            res += word.length;
        }
    }

    return res;
};

function isWordFormed(word, chars) {
    const charCount = {};
    
    // Count characters in the word
    for (let char of word) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check if the word can be formed from chars
    for (let char of word) {
        if (!(chars.includes(char) && charCount[char] <= chars.split(char).length - 1)) {
            return false;
        }
    }

    return true;
}
