/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (arr) {
    const map = new Map()
    let max = -1;
    for (let i of arr) {
        if (map.has(i * -1)) {
            max = Math.max(max, Math.abs(i))
        }
        map.set(i, 0)
    }
    return max;
};