/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0
    let res = nums.forEach(el => {
        if (el !== val) {
            nums[count++] = el
        }
    })
    return count
};