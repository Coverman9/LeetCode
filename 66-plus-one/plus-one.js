/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let res = digits.join('')
    res = BigInt(res) + BigInt(1)
    return res.toString().split('')
}