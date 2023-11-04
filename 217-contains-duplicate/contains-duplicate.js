/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}
    for (let el of nums) {
        if (obj[el]) {
            obj[el]++
        } else {
            obj[el] = 1
        }
    }

    for (let nums of Object.values(obj)) {
        if (nums >= 2) return true
    }
    return false
};