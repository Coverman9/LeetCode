/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = s.trim()
    let len = res.split(' ')
    console.log(len[len.length - 1].length)
    return len[len.length - 1].length
};