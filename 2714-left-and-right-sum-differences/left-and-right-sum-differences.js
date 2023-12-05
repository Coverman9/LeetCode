/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let leftSum = []
    let rightSum = []
    let res = []
    let curL = 0
    let curR = 0
    for (let i = 0; i < nums.length; i++) {
        if (!nums[i - 1]) {
            leftSum.push(curL)
        } else {
            curL+= nums[i - 1]
            leftSum.push(curL)
        }
    }
    for (let j = nums.length - 1; j >= 0; j--) {
        if (!nums[j + 1]) {
            rightSum.unshift(curR)
        } else {
            curR+= nums[j + 1]
            rightSum.unshift(curR)
        }
    }
    for (let k = 0; k < leftSum.length; k++) {
        res.push(Math.abs(leftSum[k] - rightSum[k]))
    }

    return res
};