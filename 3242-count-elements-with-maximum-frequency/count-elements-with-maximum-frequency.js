/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let obj = {}
    let res = 0
    for (let el of nums) {
        if (obj[el]) {
            obj[el]++
        } else {
            obj[el] = 1
        }
    }
    let max = 0
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key]
        }
    }
    for (let key in obj) {
        if (obj[key] === max) {
            res += max
        }
    }
    return res
};