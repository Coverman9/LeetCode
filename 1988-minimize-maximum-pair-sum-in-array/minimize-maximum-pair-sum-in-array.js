/**
 * @param {number[]} nums
 * @return {number}
 */
var minPairSum = function(nums) {
    nums.sort((a,b) => a - b)
    let left = 0
    let right = nums.length - 1
    let sums = []
    while (left < right) {
        sums.push(nums[left] + nums[right])
        left++
        right--
    }
    return Math.max(...sums)
};