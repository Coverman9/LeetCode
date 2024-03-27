/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
     if(k <= 1){
        return 0
    }

    if(nums.length == 1){
        return nums[0] < k ? 1 : 0
    }

    let i=0
    let j=0
    let res = 0
    let prod = 1

    while(j<nums.length){
        prod = prod*nums[j]

        while(prod >= k){
            prod = prod/nums[i]
            i++
        }
        res = res + 1 + (j-i)
        j++
    }

    return res
};