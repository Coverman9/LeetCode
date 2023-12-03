/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let res = []
    let count = 0
    let copy = [...nums]
    let curr = copy.shift()
    while (res.length < nums.length) {
        for (let num of nums) {
            if (curr > num) {
                count++
            }
        }
        res.push(count)
        count = 0
        curr = copy.shift()
    }

    return res
};