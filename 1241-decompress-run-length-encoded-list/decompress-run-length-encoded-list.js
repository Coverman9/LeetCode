/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = []
    for (let i = 0; i < nums.length; i++) {
        const [freq, val] = [nums[2*i], nums[2*i+1]]
        for (let k = 0; k < freq; k++) {
            res.push(val)
        }
    }
    return res
};