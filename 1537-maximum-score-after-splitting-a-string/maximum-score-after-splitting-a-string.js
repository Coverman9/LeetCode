/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let score = 0
    for (let i = 1; i < s.length; i++) {
        let left = s.slice(0, i)
        let right = s.slice(i, s.length) 
        let curr = 0
        for (let j = 0; j < s.length; j++) {
            if (left[j] === '0') curr++
            if (right[j] === '1') curr++
        }
        if (curr > score) {
            score = curr
        }
    }
    return score
};