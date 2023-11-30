/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let res = 0
    let rCount = 0
    let lCount = 0
    for (let i = 0; i < s.length; i++) {
        if (rCount === lCount) {
            res++
            lCount = 0
            rCount = 0
        }
        if (s[i] === 'R') {
            rCount++
        } else if (s[i] === 'L') {
            lCount++
        }
    }

    return res
};