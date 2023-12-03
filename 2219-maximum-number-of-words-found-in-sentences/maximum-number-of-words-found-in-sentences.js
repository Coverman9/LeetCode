/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let res = []
    for (let el of sentences) {
        res.push(el.split(' '))
    }
    let nums = []
    for (let sent of res) {
        nums.push(sent.length)
    }
    return Math.max(...nums)
};