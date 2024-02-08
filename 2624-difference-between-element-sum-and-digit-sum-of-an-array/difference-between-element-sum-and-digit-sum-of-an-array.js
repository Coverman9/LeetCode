/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0
    let dSum = 0
    sum = nums.reduce((acc, el) => acc + el, 0)
    for (let el of nums) {
        let num = el.toString().split('')
        for (let dig of num) {
            dSum += +dig
        }
    }
    return sum - dSum
};