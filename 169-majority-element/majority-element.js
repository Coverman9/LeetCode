/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0
    let obj = {}
    let mostAppeared;
    for (let num of nums) {
        obj[num] = obj[num] ? obj[num] += 1 : 1
        if (obj[num] > count) {
            count = obj[num]
            mostAppeared = num
        }
    }

    return mostAppeared
    
};