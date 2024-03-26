/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let min = 1
    let res = nums.filter(el => el > 0).sort((a,b) => a - b)
    for (let i of res) {
        if (i === min) {
            min++
        } else if (i !== min && i > min) {
            return min
        }
    }
    return min
    
};