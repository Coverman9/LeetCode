/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    
    let obj = {}
    for (let word of words) {
        for (let j = 0; j < word.length; j++) {
            let letter = word[j]
            if (obj[letter]) {
                obj[letter]++
            } else {
                obj[letter] = 1
            }
        }
    }
    for (let key of Object.keys(obj)) {
        if (obj[key] % words.length != 0 ) return false
    }
    
    return true
};