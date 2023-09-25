/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const target = 0
    const res = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for i
        let partialTarget = target - nums[i]
        let j = i + 1
        let k = nums.length - 1
        while (j < k) {
            let partialSum = nums[j] + nums[k]
            if (partialSum === partialTarget) {
                res.push([nums[i], nums[j], nums[k]])
                j++
                k--
                while (j < k && nums[j] === nums[j - 1]) j++; // Skip duplicates for j
                while (j < k && nums[k] === nums[k + 1]) k--; // Skip duplicates for k
            } else if (partialSum > partialTarget) {
                k--
            } else {
                j++
            }
        }
    }
    return res
};
