/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum = 0
    let dSum = 0
    for (let el of nums) {
        sum += el
        let num = el.toString().split('')
        for (let dig of num) {
            dSum += +dig
        }
    }
    return sum - dSum
};