/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let res = 0
    for (let el of stones) {
        if (jewels.includes(el)) res++
    }
    return res
};