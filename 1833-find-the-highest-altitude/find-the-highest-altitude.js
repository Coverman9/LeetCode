/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let res = []
    let start = 0
    for (let i = 0; i < gain.length; i++) {
        res.push(start)
        start+= gain[i]
    }
    return Math.max(...res, start)
};