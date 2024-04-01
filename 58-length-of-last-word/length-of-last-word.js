/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let res = s.trim()
    let len = res.split(' ')
    
    return len[len.length - 1].length
};