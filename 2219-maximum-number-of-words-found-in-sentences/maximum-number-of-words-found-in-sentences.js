/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let res = []
    for (let el of sentences) {
        res.push(el.split(' ').length)
    }
    return Math.max(...res)
};